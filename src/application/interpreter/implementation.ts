import { Angle, DegreesAmount, Line, PixelsAmount, Point } from "@/types/domain/geometry";
import { Instruction, SystemInterpreter } from "./types";
import { List } from "@/types/base/global";
import { Character, Expression } from "@/types/domain/l-system";
import { IAppSettings } from "@/types/infrastructure/app-settings";
import { Stack } from "../Stack/types";
import { TreeJoint } from "@/types/application/tree";
import { IStartSelector } from "@/domain/geometry/location/types";
import { IShapeBuilder } from "@/domain/geometry/shape/types";
import { RandomSource } from "@/infrastructure/random/types";
import { Color } from "@/types/adapters/graphics";
import { leafColors } from "./constants";

export class SystemToGeometryMapper implements SystemInterpreter {
	// Эти поля будем менять по ходу построения списка команд:
	private currentLocation: Point = { x: 0, y: 0 };
	private currentAngle: DegreesAmount = 0;

	// Будем менять текущую ширину линии ()
	private currentWidth: PixelsAmount = 0;

	// В этих полях будем хранить список символов
	// и список команд, которые этим символам соответствуют:
	private systemTokens: List<Character> = [];
	private drawInstructions: List<Instruction> = [];

	constructor(
		private shapeBuilder: IShapeBuilder,
		private startSelector: IStartSelector,
		private stack: Stack<TreeJoint>,
		private settings: IAppSettings,
		private random: RandomSource // обёртка для Math.random()
	) {}

	public translate(expression: Expression): List<Instruction> {
		if (this.drawInstructions) this.drawInstructions = [];
		if (this.currentAngle) this.currentAngle = 0;

		this.currentLocation = { ...this.startSelector.selectStart() };
    this.currentWidth = this.settings.stemWidth;
    this.systemTokens = expression.split("");

    this.systemTokens.forEach(this.translateToken);

    return this.drawInstructions;
	}

  private translateToken = (token: Character): void => {
		switch (token) {
			// Если мы встречаем среди символов 0 или 1,
			// рисуем линию из текущего положения на плоскости
			// и текущим углом:
			case "0": {
				const line = this.createLine();
	
				this.currentLocation = { ...line.end };
				this.drawInstructions.push({
					line,
					color: this.selectLeafColor(),  // Добавляем зелёный цвет
					width: this.settings.leafWidth, // и ширину листа.
				});
	
				break;
			}

			case '1':
			case "2": {
				// Рисуем ветки только в 60% случаев:
				if (this.shouldSkip()) return;
	
				const line = this.createLine();
				this.drawInstructions.push({ line, width: this.currentWidth });
				this.currentLocation = { ...line.end };
	
				break;
			}

			// При открывающей скобке мы «поворачиваем влево»
			// и кладём текущее положение и угол в стек:
			case "[": {
				// Уменьшаем ширину ветки:
				this.currentWidth *= 0.75;
	
				// Добавляем случайное отклонение от поворота:
				this.currentAngle -=
					this.settings.jointAngle + this.randomAngleDeviation();
	
				// Запоминаем место разветвления, ширину и угол,
				// чтобы потом вернуться сюда и повернуть в другую сторону:
				this.stack.push({
					location: { ...this.currentLocation },
					rotation: this.currentAngle,
					stemWidth: this.currentWidth,
				});
	
				break;
			}
	
			case "]": {
				// Получаем место последнего разветвления:
				const lastJoint = this.stack.pop();
	
				// Используем его положение, угол и ширину,
				// чтобы создать вторую ветку:
				this.currentWidth = lastJoint.stemWidth;
				this.currentLocation = { ...lastJoint.location };
				this.currentAngle =
					lastJoint.rotation +
					2 * this.settings.jointAngle +
					this.randomAngleDeviation();
	
				break;
			}
		}
	}

	private shouldSkip = (): boolean => {
    return this.random.getValue() > 0.4;
  };

	private createLine = (): Line => {
    return this.shapeBuilder.createLine(
      this.currentLocation,
      this.settings.stemLength,
      this.currentAngle
    );
  };

	private randomAngleDeviation = (): Angle => {
    return this.random.getBetweenInclusive(-5, 5);
  };

	private selectLeafColor = (): Color => {
    const randomColor = this.random.getBetweenInclusive(0, 2);
    return leafColors[randomColor];
  };
}
