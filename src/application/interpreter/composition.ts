import { container } from "@/infrastructure/DI-container/core";
import { Drawer } from "@/adapters/graphics/drawer/types";
import { SystemInterpreter } from '@/application/interpreter/types';
import { SystemToGeometryMapper } from "@/application/interpreter/implementation";
import { APP_SETTINGS } from '@/infrastructure/app-settings';
import { JointsStack } from "../Stack/implementation";
import { IShapeBuilder } from "@/domain/geometry/shape/types";
import { StartPointSelector } from "@/domain/geometry/location/implementation";
import { IStartSelector } from "@/domain/geometry/location/types";

container.register<SystemInterpreter>('SystemInterpreter', new SystemToGeometryMapper(
  container.get<IShapeBuilder>('IShapeBuilder'),
  container.get<IStartSelector>('IStartSelector'),
  new JointsStack(),
  APP_SETTINGS,
));
