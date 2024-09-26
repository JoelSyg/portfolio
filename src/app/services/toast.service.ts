import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastElement: HTMLElement | null = null;

  show(message: string, duration: number = 4000) {
    if (!this.toastElement) {
      this.toastElement = document.createElement('div');
      this.toastElement.className = 'toast-message';
      document.body.appendChild(this.toastElement);
    }
    this.toastElement.innerText = message;
    this.toastElement.classList.add('show');

    setTimeout(() => {
      if (this.toastElement) {
        this.toastElement.classList.remove('show');
      }
    }, duration);
  }

}
