import { Component, Input, OnInit } from '@angular/core';
import { taskDataService } from '../../../services/task-data.service';
import { TaskCardComponent } from '../task-card/task-card.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss'],
  imports: [NgIf, TaskCardComponent]
})
export class DropdownListComponent implements OnInit {
  isDropdownOpen = false;
  

  constructor(private taskDataService: taskDataService) { }
  tasks: any;
  ngOnInit(): void {
    this.tasks = this.taskDataService.tasks;
    console.log('DropdownListComponent tasks:', this.taskDataService.tasks);
  }

  toggleDropdown(): void {
    this.isDropdownOpen =!this.isDropdownOpen;
  }
}