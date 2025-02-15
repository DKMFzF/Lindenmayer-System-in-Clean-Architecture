import { IShapeBuilder } from "@/domain/geometry/shape/types";
import { Angle, Length, Line, Point } from "@/types/domain/geometry";

/**
 * @class CoreShapeBuilder - реализация модуля геометрии 
 */
export class CoreShapeBuilder implements IShapeBuilder {
  createLine(start: Point, length: Length, angle: Angle = 0): Line {
    const radians = (angle * Math.PI) / 180;
    const end: Point = {
			x: start.x + length * Math.sin(radians),
			y: start.y - length * Math.cos(radians)
		};

    return { start, end }
  }
}
