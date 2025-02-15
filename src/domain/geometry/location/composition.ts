import { container } from "@/infrastructure/DI-container/core";
import { StartPointSelector } from "@/domain/geometry/location/implementation";
import { IStartSelector } from "@/domain/geometry/location/types";
import { APP_SETTINGS } from "@/infrastructure/app-settings";
import { STRUCTURAL_SETTINGS } from "@/infrastructure/structural-settings";

container.register<IStartSelector>(
  STRUCTURAL_SETTINGS.domain.geometry.local, 
  new StartPointSelector(APP_SETTINGS)
);
