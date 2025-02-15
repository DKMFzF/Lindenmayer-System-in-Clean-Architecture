import { Point } from "@/types/domain/geometry";

export interface StartSelector {
	selectStart(): Point;
}
