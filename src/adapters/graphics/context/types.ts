import { Nullable } from "@/types/base/global";

export type DrawingContext = Nullable<CanvasRenderingContext2D>;
export interface DrawingContextProvider {
  getInstance(): DrawingContext;
}
