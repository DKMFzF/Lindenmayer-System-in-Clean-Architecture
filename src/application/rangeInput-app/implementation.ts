import { RangeInputPresenter } from '@/presentation/components/rangeInput-presenter/implementation';
import { IAppSettings } from '@/types/infrastructure/app-settings';
import { IRangeInputApp } from './types';

export class RangeInputApp implements IRangeInputApp {
  private presenter: RangeInputPresenter;

  constructor(settings: IAppSettings) {
      const rangeInputs = document.querySelectorAll(settings.rangeAppSettings) as NodeListOf<HTMLInputElement>;
      this.presenter = new RangeInputPresenter(rangeInputs);
  }

  public initialize(settings: IAppSettings): void {
    const rangeInputs = document.querySelectorAll(settings.rangeAppSettings) as NodeListOf<HTMLInputElement>;
    this.presenter = new RangeInputPresenter(rangeInputs);
    this.presenter.initialize();
  }
}
