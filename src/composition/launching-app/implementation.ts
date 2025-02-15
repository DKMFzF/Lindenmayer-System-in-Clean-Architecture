import { Application } from "./types";
import { ISystemBuilder } from "@/domain/l-system/types";
import { Drawer } from "@/adapters/graphics/drawer/types";
import { SystemInterpreter } from "@/application/interpreter/types";
import { IAppSettings } from "@/types/infrastructure/settings";

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
		const lines = this.interpreter.translate(system);
		lines.forEach((line) => this.drawer.drawLine(line));
	}
}
