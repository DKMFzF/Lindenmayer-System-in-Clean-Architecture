import { Line } from "@/types/domain/geometry";
import { BrushSettings, Drawer } from "./types";
import { DrawingContext, DrawingContextProvider } from "../context/types";
import { DEFAULT_COLOR, DEFAULT_WIDTH } from "./constants";

export class CanvasDrawer implements Drawer {
  private context: DrawingContext = null;

  constructor(private contextProvider: DrawingContextProvider) {
    this.context = this.contextProvider.getInstance();
		if (!this.context) throw new Error('Failed to access the drawing context.');
  }

	// Метод drawLine принимает объект Line и объект BrushSettings,
	// который содержит цвет и толщину линии.
  public drawLine({ start, end }: Line, { color, width }: BrushSettings = {}): void {
    if (!this.context) return;

		this.context.strokeStyle = color ?? DEFAULT_COLOR;
		this.context.lineWidth = width ?? DEFAULT_WIDTH;

		// Методы beginPath, moveTo, lineTo и stroke —
		// это прямое использование `CanvasRenderingContext2D`:
		this.context.beginPath();
		this.context.moveTo(start.x, start.y);
		this.context.lineTo(end.x, end.y);
		this.context.stroke();
  }
}
