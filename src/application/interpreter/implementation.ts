import { DegreesAmount, Line, Point } from "@/types/domain/geometry";
import { SystemInterpreter } from "./types";
import { List } from "@/types/base/global";
import { Character, Expression } from "@/types/domain/l-system";
import { CoreShapeBuilder } from "@/domain/geometry/shape/implementation";
import { IAppSettings } from "@/types/infrastructure/app-settings";
import { Stack } from "../Stack/types";
import { TreeJoint } from "@/types/application/tree";
import { IStartSelector } from "@/domain/geometry/location/types";

export class SystemToGeometryMapper implements SystemInterpreter {
	// Эти поля будем менять по ходу построения списка команд:
	private currentLocation: Point = { x: 0, y: 0 };
	private currentAngle: DegreesAmount = 0;

	// В этих полях будем хранить список символов
	// и список команд, которые этим символам соответствуют:
	private systemTokens: List<Character> = [];
	private drawInstructions: List<Line> = [];

	// Объявляем зависимости:
	constructor(
		private shapeBuilder: CoreShapeBuilder,
		private startSelector: IStartSelector,
		private stack: Stack<TreeJoint>,
		private settings: IAppSettings
	) {}

	// Реализуем публичный метод:
	public translate(expression: Expression): List<Line> {
		this.currentLocation = { ...this.startSelector.selectStart() };
		this.systemTokens = expression.split('');
		this.systemTokens.forEach(this.translateToken);
		return this.drawInstructions;
	}

  private translateToken = (token: Character): void => {
		switch (token) {
			// Если мы встречаем среди символов 0 или 1,
			// рисуем линию из текущего положения на плоскости
			// и текущим углом:
			case '0':
			case '1': {
				const line = this.shapeBuilder.createLine(
					this.currentLocation,
					this.settings.stemLength,
					this.currentAngle
				);

				this.drawInstructions.push(line);
				this.currentLocation = { ...line.end };
				break;
			}

			// При открывающей скобке мы «поворачиваем влево»
			// и кладём текущее положение и угол в стек:
			case '[': {
				this.currentAngle -= this.settings.jointAngle;
				this.stack.push({
					location: { ...this.currentLocation },
					rotation: this.currentAngle,
					stemWidth: this.settings.stemLength
				});

				break;
			}

			// При закрывающей скобке вытаскиваем последнее положение
			// из стека и используем его как текущие,
			// а направление переводим направо:
			case ']': {
				const lastJoint = this.stack.pop();
				this.currentLocation = { ...lastJoint.location };
				this.currentAngle = lastJoint.rotation + 2 * this.settings.jointAngle;
				break;
			}
		}
	}
}