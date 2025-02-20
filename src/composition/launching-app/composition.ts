import { APP_SETTINGS } from "@/infrastructure/app-settings";
import { container } from "../di-container";
import { App } from "./implementation";
import { Application } from "./types";
import { ISystemBuilder } from "@/domain/l-system/types";
import { Drawer } from "@/adapters/graphics/drawer/types";
import { SystemInterpreter } from "@/application/interpreter/types";
import { STRUCTURAL_SETTINGS } from "@/infrastructure/structural-settings";
import { IRangeInputApp } from "@/application/rangeInput-app/types";


container.register<Application>(STRUCTURAL_SETTINGS.launchingApp, new App(
  container.get<ISystemBuilder>(STRUCTURAL_SETTINGS.domain.lSystem),
  container.get<Drawer>(STRUCTURAL_SETTINGS.adapters.graphics.drawer),
  container.get<SystemInterpreter>(STRUCTURAL_SETTINGS.application.interpreter),
  container.get<IRangeInputApp>(STRUCTURAL_SETTINGS.application.rangeInputApp),
  APP_SETTINGS
));
