import { container } from "@/infrastructure/DI-container/core";
import { CanvasDrawer } from "@/adapters/graphics/drawer/implementation";
import { Drawer } from "@/adapters/graphics/drawer/types";
import { CanvasContextProvider } from "../context/implementation";
import { DomSource } from "@/adapters/dom/implementation";
import { APP_SETTINGS } from "@/infrastructure/app-settings";

container.register<Drawer>('Drawer', new CanvasDrawer(
  new CanvasContextProvider(
    new DomSource(window),
    { devicePixelRatio: undefined },
    APP_SETTINGS
  )
));
