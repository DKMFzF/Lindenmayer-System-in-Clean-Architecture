import { IAppSettings } from "@/types/infrastructure/app-settings";

// в идеале этот модуль доллжен быть так же вписан в DI-контейнер
export const APP_SETTINGS: IAppSettings = {
  canvasSize: {
    width: 800,
    height: 600,
  },

  iterations: 12,
  initiator: "11110",
  rules: {
    "1": "21",
    "0": "1[20]20",
  },

  stemLength: 30,
  jointAngle: 20,
  leafWidth: 4,
  stemWidth: 16,
};
