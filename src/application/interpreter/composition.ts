import { container } from "@/infrastructure/DI-container/core";
import { SystemInterpreter } from '@/application/interpreter/types';
import { SystemToGeometryMapper } from "@/application/interpreter/implementation";
import { APP_SETTINGS } from '@/infrastructure/app-settings';
import { JointsStack } from "../Stack/implementation";
import { IShapeBuilder } from "@/domain/geometry/shape/types";
import { IStartSelector } from "@/domain/geometry/location/types";

container.register<SystemInterpreter>('SystemInterpreter', new SystemToGeometryMapper(
  container.get<IShapeBuilder>('IShapeBuilder'),
  container.get<IStartSelector>('IStartSelector'),
  container.get<JointsStack>('JointsStack'),
  APP_SETTINGS,
));
