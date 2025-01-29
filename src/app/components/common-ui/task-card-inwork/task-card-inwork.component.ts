import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { Task } from '../../../services/task-data.service';
import { taskDataService } from '../../../services/task-data.service';

@Component({
  selector: 'app-task-card-inwork',
  imports: [TaskCardComponent],
  templateUrl: './task-card-inwork.component.html',
  styleUrl: './task-card-inwork.component.scss'
})
export class TaskCardInworkComponent {
  @Input({required: true}) tasks!: any;
  @Input() name: string = ''
  isDropdownOpen = false;

  toggleDropdown(): void {
    this.isDropdownOpen =!this.isDropdownOpen;
  }
}
