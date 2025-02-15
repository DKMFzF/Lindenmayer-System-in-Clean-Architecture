import { IAppSettings } from "@/types/infrastructure/settings";

// в идеале этот модуль доллжен быть так же вписан в DI-контейнер
export const APP_SETTINGS: IAppSettings = {
  canvasSize: {
    width: 800,
    height: 600,
  }
}
