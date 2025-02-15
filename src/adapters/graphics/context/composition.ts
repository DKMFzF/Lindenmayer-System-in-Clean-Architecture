import { container } from "@/composition/di-container";
import { DrawingContextProvider } from "./types";
import { CanvasContextProvider } from "./implementation";
import { ElementSource } from "@/adapters/dom/types";
import { APP_SETTINGS } from "@/infrastructure/app-settings";
import { STRUCTURAL_SETTINGS } from "@/infrastructure/structural-settings";

container.register<DrawingContextProvider>(
  STRUCTURAL_SETTINGS.adapters.graphics.context, 
  new CanvasContextProvider(
    container.get<ElementSource>(STRUCTURAL_SETTINGS.adapters.dom),
    { devicePixelRatio: undefined },
    APP_SETTINGS
  )
);
