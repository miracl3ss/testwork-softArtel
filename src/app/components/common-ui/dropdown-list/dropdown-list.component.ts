import { Component } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { NgFor } from '@angular/common';
import { tasks } from '../../../services/task-data.service';

@Component({
  selector: 'app-dropdown-list',
  imports: [TaskCardComponent, NgFor],
  templateUrl: './dropdown-list.component.html',
  styleUrl: './dropdown-list.component.scss'
})
export class DropdownListComponent {
  tasks = tasks;
}
