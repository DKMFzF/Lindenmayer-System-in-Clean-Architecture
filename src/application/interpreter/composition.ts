import { container } from "@/infrastructure/DI-container/core";
import { SystemInterpreter } from '@/application/interpreter/types';
import { SystemToGeometryMapper } from "@/application/interpreter/implementation";
import { APP_SETTINGS } from '@/infrastructure/app-settings';
import { JointsStack } from "../Stack/implementation";
import { IShapeBuilder } from "@/domain/geometry/shape/types";
import { IStartSelector } from "@/domain/geometry/location/types";
import { STRUCTURAL_SETTINGS } from "@/infrastructure/structural-settings";
import { RandomSource } from "@/infrastructure/random/types";

container.register<SystemInterpreter>(STRUCTURAL_SETTINGS.application.interpreter, new SystemToGeometryMapper(
  container.get<IShapeBuilder>(STRUCTURAL_SETTINGS.domain.geometry.shape),
  container.get<IStartSelector>(STRUCTURAL_SETTINGS.domain.geometry.local),
  container.get<JointsStack>(STRUCTURAL_SETTINGS.application.stack),
  APP_SETTINGS,
  container.get<RandomSource>(STRUCTURAL_SETTINGS.infrastructure.random)
));
