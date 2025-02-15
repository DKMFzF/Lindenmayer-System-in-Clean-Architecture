import { container } from "@/composition/di-container";
import { DrawingContextProvider } from "./types";
import { CanvasContextProvider } from "./implementation";
import { ElementSource } from "@/adapters/dom/types";
import { APP_SETTINGS } from "@/infrastructure/app-settings";

container.register<DrawingContextProvider>('CanvasContextProvider', new CanvasContextProvider(
  container.get<ElementSource>('ElementSource'),
  { devicePixelRatio: undefined },
  APP_SETTINGS
));
