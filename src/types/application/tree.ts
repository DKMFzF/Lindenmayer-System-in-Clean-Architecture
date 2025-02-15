import { Angle, PixelsAmount, Point } from "../domain/geometry";

export type TreeJoint = {
  location: Point;
  rotation: Angle;
  stemWidth: PixelsAmount;
};
