import { Application } from "./types";
import { ISystemBuilder } from "@/domain/l-system/types";
import { Drawer } from "@/adapters/graphics/drawer/types";
import { SystemInterpreter } from "@/application/interpreter/types";
import { IAppSettings } from "@/types/infrastructure/app-settings";

// entry point app (fased pattern)
export class App implements Application {
	constructor(
		private builder: ISystemBuilder,
		private drawer: Drawer,
		private interpreter: SystemInterpreter,
		private settings: IAppSettings
	) {}

	start(): void {
		const system = this.builder.build(this.settings);
		const instructions = this.interpreter.translate(system);
		instructions.forEach((instruction) => {
      const { line, ...settings } = instruction;
      this.drawer.drawLine(line, settings);
    });
	}
}
