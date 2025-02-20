import { BtnSubmitElement } from './types';

interface IBtnSubmitPresenter {
  onSubmit(): void;
}

export class BtnSubmitPresenter implements IBtnSubmitPresenter {
  private element: BtnSubmitElement;
  
  constructor(element: BtnSubmitElement) {
    this.element = element;
  }

  onSubmit() {
    this.element.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('Произошел клик');
    });
  }
}
