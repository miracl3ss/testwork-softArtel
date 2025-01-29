import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-task',
  imports: [],
  templateUrl: './btn-task.component.html',
  styleUrl: './btn-task.component.scss'
})
export class BtnTaskComponent {
  @Input() action!: string;
  class!: string;
  name!: string;
  pathToImg!: string;
  
  ngOnInit() {
    this.class = this.action

    switch (this.action) {
      case 'fix':
        this.name = 'Исправить';
        this.pathToImg = 'toFix';
        break;
      case 'work':
        this.name = 'В работу';
        this.pathToImg = 'toWork';
        break;
      case 'accept':
        this.name = 'Принять';
        this.pathToImg = 'toAccept'
        break;
      case 'pause':
        this.name = 'На паузу';
        this.pathToImg = 'toPause';
        break;
      case 'done':
        this.name = 'Готово';
        this.pathToImg = 'done';
        break
    }
  }
}
