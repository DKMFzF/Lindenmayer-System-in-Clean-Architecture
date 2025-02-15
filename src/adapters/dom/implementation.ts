import { Nullable } from "@/types/base/global";
import { ElementSource } from "./types";

export class DomSource implements ElementSource {
  constructor(private window: Window) {}

  public getElement(id: string): Nullable<HTMLElement> {
    return this.window.document.getElementById(id);
  }
}