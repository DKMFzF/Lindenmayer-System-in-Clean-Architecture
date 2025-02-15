import { Color } from "@/types/adapters/graphics";
import { List } from "@/types/base/global";
import { Line, PixelsAmount } from "@/types/domain/geometry";
import { Expression } from "@/types/domain/l-system";

export type Instruction = {
  line: Line;
  color?: Color;
  width?: PixelsAmount;
};

export interface SystemInterpreter {
	translate(expression: Expression): List<Instruction>;
}
