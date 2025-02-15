import { container } from "@/components/composition/core";
import { StartPointSelector } from "@/components/geometry/location/implementation";
import { IStartSelector } from "@/components/geometry/location/types";
import { APP_SETTINGS } from "@/utils/index";

container.register<IStartSelector>('IStartSelector', new StartPointSelector(APP_SETTINGS));
