import { container } from "@/infrastructure/DI-container/core";
import { CanvasDrawer } from "@/adapters/graphics/drawer/implementation";
import { Drawer } from "@/adapters/graphics/drawer/types";
import { CanvasContextProvider } from "../context/implementation";

// по хорошу тут должен быть каскад, но да ладно
container.register<Drawer>('Drawer', 
  new CanvasDrawer(container.get<CanvasContextProvider>('CanvasContextProvider'))
);
