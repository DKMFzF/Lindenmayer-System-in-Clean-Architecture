import { Nullable } from "@/types/base/global";
import { DrawingContext, DrawingContextProvider } from "./types";
import { ElementSource, PixelRatioSource } from "@/adapters/dom/types";
import { IAppSettings } from "@/types/infrastructure/settings";

export class CanvasContextProvider implements DrawingContextProvider {
	private element: Nullable<HTMLCanvasElement> = null;
	private context: Nullable<DrawingContext> = null;

	constructor(
		private elementSource: ElementSource,
		private pixelRatioSource: PixelRatioSource,
		private settings: IAppSettings
	) {
		const element = this.elementSource.getElement('canvas');
		if (!element) throw new Error('Failed to find a canvas element.');

		this.element = element as HTMLCanvasElement;
		this.context = this.element.getContext('2d');
		this.normalizeScale();
	}

  public getInstance(): DrawingContext {
    return this.context;
  }

  private normalizeScale(): void {
    if (!this.element || !this.context) return;

    const ratio = this.pixelRatioSource.devicePixelRatio || 1;
    const { width, height } = this.settings.canvasSize;

    this.element.width = width * ratio;
    this.element.height = height * ratio;

    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;

    this.context.imageSmoothingEnabled = false;
    this.context.scale(ratio, ratio);
  }
}