import { IAppSettings } from "@/types/infrastructure/app-settings";

export interface IRangeInputApp {
  initialize(settings: IAppSettings): void;
}
