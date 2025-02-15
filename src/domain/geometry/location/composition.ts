import { container } from "@/infrastructure/DI-container/core";
import { StartPointSelector } from "@/domain/geometry/location/implementation";
import { IStartSelector } from "@/domain/geometry/location/types";
import { APP_SETTINGS } from "@/infrastructure/app-settings";

container.register<IStartSelector>('IStartSelector', new StartPointSelector(APP_SETTINGS));
