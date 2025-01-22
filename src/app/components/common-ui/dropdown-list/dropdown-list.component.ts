import { Component, Input, OnInit } from '@angular/core';
import { Task, taskDataService } from '../../../services/task-data.service';
import { TaskCardComponent } from '../task-card/task-card.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss'],
  imports: [NgIf, TaskCardComponent]
})
export class DropdownListComponent implements OnInit {
  @Input({required: true}) task!: Task[];
  @Input() name: string = ''
  isDropdownOpen = false;
  

  constructor(private taskDataService: taskDataService) { }
  tasks: any;
  ngOnInit(): void {
    this.tasks = this.task;
  }

  toggleDropdown(): void {
    this.isDropdownOpen =!this.isDropdownOpen;
  }
}