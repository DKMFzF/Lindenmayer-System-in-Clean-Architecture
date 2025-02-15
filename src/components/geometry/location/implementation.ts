import { APP_SETTINGS } from "@/utils";
import { StartSelector } from "@/components/geometry/location/types";
import { Point } from "@/types/domain/geometry";
import { IAppSettings } from "@/types/settings";

export class StartPointSelector implements StartSelector {
  constructor(private settings: IAppSettings) {}

  selectStart(): Point {
    const { width, height } = this.settings.canvasSize;
    return {
			x: Math.round(width / 2),
			y: height
		};
  }
}
