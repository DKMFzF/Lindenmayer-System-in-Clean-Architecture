import { Angle, Length, PixelsAmount, Size } from "@/types/domain/geometry";
import { RangeClass } from '@/types/application/rangeApp';
import { BTNUpdate } from '@/types/application/btnUpdate';
import { Axiom, IterationsCount, RuleSet } from "../domain/l-system";

export interface IAppSettings {
  canvasSize: Size

  rules: RuleSet;
  initiator: Axiom;
  iterations: IterationsCount;

  stemLength: Length;
  jointAngle: Angle;

  leafWidth: PixelsAmount;
  stemWidth: PixelsAmount;

  rangeAppSettings: RangeClass;
  btnUpdateThree: BTNUpdate;
}
