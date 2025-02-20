import { container } from "@/composition/di-container";
import { IRangeInputApp } from "./types";
import { RangeInputApp } from "./implementation";
import { APP_SETTINGS } from "@/infrastructure/app-settings";
import { STRUCTURAL_SETTINGS } from "@/infrastructure/structural-settings";

container.register<IRangeInputApp>(STRUCTURAL_SETTINGS.application.rangeInputApp, new RangeInputApp(APP_SETTINGS));
