import { container } from "@/domain/composition/core";
import { StartPointSelector } from "@/domain/geometry/location/implementation";
import { IStartSelector } from "@/domain/geometry/location/types";
import { APP_SETTINGS } from "@/utils/index";

container.register<IStartSelector>('IStartSelector', new StartPointSelector(APP_SETTINGS));
