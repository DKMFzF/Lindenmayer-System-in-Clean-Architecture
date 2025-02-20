import { Application } from "./types";
import { ISystemBuilder } from "@/domain/l-system/types";
import { Drawer } from "@/adapters/graphics/drawer/types";
import { SystemInterpreter } from "@/application/interpreter/types";
import { IAppSettings } from "@/types/infrastructure/app-settings";
import { IRangeInputApp } from "@/application/rangeInput-app/types";
import { APP_SETTINGS } from "@/infrastructure/app-settings";

// entry point app (fased pattern)
export class App implements Application {
	constructor(
		private builder: ISystemBuilder,
		private drawer: Drawer,
		private interpreter: SystemInterpreter,
		private rangeInput: IRangeInputApp,
		private settings: IAppSettings
	) {}

	start(): void {
		this.generateTree()
		document.addEventListener('DOMContentLoaded', () => this.rangeInput.initialize(this.settings));
	
		// обновление дерева
		const generateButton = document.querySelector(APP_SETTINGS.btnUpdateThree) as HTMLButtonElement;
		generateButton.addEventListener('click', (event) => {
			event.preventDefault();
			this.updateSettings();
			this.generateTree();
		});
	}

	// генерация дерева
	private generateTree(): void {
    this.drawer.clear();
    const system = this.builder.build(this.settings);
    const instructions = this.interpreter.translate(system);
    instructions.forEach((instruction) => {
        const { line, ...settings } = instruction;
        this.drawer.drawLine(line, settings);
    });
	}

	// обновление настроек
	private updateSettings(): void {
		const inputs = document.querySelectorAll('.l-system__input') as NodeListOf<HTMLInputElement>;
		if (inputs.length < 3) throw new Error('Ошибка: Не удалось найти все range inputs');
		this.settings.iterations = Number(inputs[0].value);
		this.settings.stemLength = Number(inputs[1].value);
		this.settings.jointAngle = Number(inputs[2].value);
	}	
}
