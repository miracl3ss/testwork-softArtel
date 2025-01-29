import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MouseHoverService {
  private timeout: ReturnType<typeof setTimeout> | undefined | null;

  private clearTimeoutIfSet(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }

  toggle(elements: HTMLElement[], delay: number = 800): void {
    this.clearTimeoutIfSet();
    this.timeout = setTimeout(() => {
      elements.forEach((el) => {
        if (el) {
          if (el.classList.contains('show')) {
            el.classList.remove('show');
            el.classList.add('hide');
          } else if (el.classList.contains('hide')) {
            el.classList.remove('hide');
            el.classList.add('show');
          } else {
            // Если ни один из классов не установлен, можно установить по умолчанию 'show'
            el.classList.add('show');
          }
        }
      });
      this.timeout = null;
    }, delay);
  }
  hide(elements: HTMLElement[], delay: number = 800) {
    this.clearTimeoutIfSet();
    this.timeout = setTimeout(() => {
      elements.forEach((el) => {
        el.classList.add('hide');
        el.classList.remove('show')
      })
      this.timeout = null;
    }, delay)
  }
  show(elements: HTMLElement[], delay: number = 800) {
    this.clearTimeoutIfSet();
    this.timeout = setTimeout(() => {
      elements.forEach((el) => {
        el.classList.add('show');
        el.classList.remove('hide')
      })
      this.timeout = null;
    }, delay)
  }
}