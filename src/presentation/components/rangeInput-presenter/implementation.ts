import { RangeInputElements } from '@/presentation/components/rangeInput-presenter/types';

export interface IRangeInputPresenter {
    initialize(): void;
}

export class RangeInputPresenter implements IRangeInputPresenter {
    private rangeInputs: RangeInputElements;

    constructor(rangeInputs: RangeInputElements) {
        this.rangeInputs = rangeInputs;
    }

    public initialize(): void {
        this.rangeInputs.forEach(input => {
            const valueDisplay = input.nextElementSibling as HTMLElement | null;
            if (!valueDisplay) return;
            input.addEventListener('input', () => {
                valueDisplay.textContent = input.value;
            });
        });
    }
}
