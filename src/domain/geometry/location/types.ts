import { Point } from "@/types/domain/geometry";

export interface IStartSelector {
	selectStart(): Point;
}
