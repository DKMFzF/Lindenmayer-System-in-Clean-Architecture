import { Nullable } from "@/types/base/global";

export interface ElementSource {
  getElement(id: string): Nullable<HTMLElement>;
}

export interface PixelRatioSource {
  devicePixelRatio?: number;
}
