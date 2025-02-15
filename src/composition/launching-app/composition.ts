import { APP_SETTINGS } from "@/infrastructure/app-settings";
import { container } from "../di-container";
import { App } from "./implementation";
import { Application } from "./types";
import { ISystemBuilder } from "@/domain/l-system/types";
import { Drawer } from "@/adapters/graphics/drawer/types";
import { SystemInterpreter } from "@/application/interpreter/types";

container.register<Application>("Application", new App(
  container.get<ISystemBuilder>('ISystemBuilder'),
  container.get<Drawer>('Drawer'),
  container.get<SystemInterpreter>('SystemInterpreter'),
  APP_SETTINGS
));
