import { Color } from "@/types/adapters/graphics";
import { Line, PixelsAmount } from "@/types/domain/geometry";

export type BrushSettings = {
	color?: Color;
	width?: PixelsAmount;
};

export interface Drawer {
	drawLine(line: Line, settings?: BrushSettings): void;
	clear(): void;
}
