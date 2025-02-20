export interface IRangeInputPresenter {
    initialize(): void;
}

export class RangeInputPresenter implements IRangeInputPresenter {
    private rangeInputs: NodeListOf<HTMLInputElement>;

    constructor(rangeInputs: NodeListOf<HTMLInputElement>) {
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