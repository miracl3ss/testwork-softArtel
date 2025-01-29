import { Component, OnChanges, OnInit } from '@angular/core';
import { DateNowComponent } from "../../common-ui/date-now/date-now.component";
import { FilterComponent } from "../../common-ui/filter/filter.component";
import { DropdownListComponent } from "../../common-ui/dropdown-list/dropdown-list.component";
import { Task, taskDataService } from '../../../services/task-data.service';
import { DataService } from '../../../services/data.service';
import { NavSubPagesComponent } from "../../common-ui/nav-sub-pages/nav-sub-pages.component";
import { PathService } from '../../../services/path.service';
import { TaskCardInworkComponent } from "../../common-ui/task-card-inwork/task-card-inwork.component";
import { TaskCardComponent } from "../../common-ui/task-card/task-card.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [DateNowComponent, FilterComponent, NavSubPagesComponent, DropdownListComponent, TaskCardInworkComponent, TaskCardComponent]
})
export class MainComponent implements OnInit, OnChanges {
    myTasks: any[] = [];
    pausedTasks: any[] = [];
    unassignedTasks: any[] = [];
    taskInWork: any[] = [];
    products!: { name: string, icon: string }[];
    tasksType!: { name: string, icon: string }[];
    filterTasks: string = 'Все задачи';
    filterProducts: string = 'Все продукты';
  
    status: string = 'agreement';
    currentPath!: string;
    path!: string;
  
  
    constructor(private taskDataService: taskDataService, private dataService: DataService, private pathService: PathService) { }
  
    ngOnInit(): void {
      this.products = this.dataService.getDataProducts();
      this.tasksType = this.dataService.getDataTask()
      
      this.pathService.updatePath();
      this.path = this.pathService.getPath()
      this.filterTask(this.path);
      }
    
    ngOnChanges(changes: any) {
      if (changes.path) {
      this.path = this.pathService.getPath();
      this.filterTask(this.path)
      }
    }
    ngDoCheck(): void {
      this.path = this.pathService.getPath();
      this.filterTask(this.path)
    }
    filterTask(status: string) {
      this.path = this.pathService.getPath();
      switch (this.path) {
        case '/main/toBeAgreed':
          status = 'agreement';
          break;
        case '/main/forWork':
          status = 'execution';
          break;
        case '/main/onReview':
          status = 'review';
          break;
        case '/main/drafts':
          status = 'draft'
      }
      const tasks = this.taskDataService.getFilteredTasks(status);
      const task = this.taskDataService.getTasks();
      this.taskInWork = task.filter(task => task.inWork === true);
      this.myTasks = tasks.filter(task => task.executorName === 'Вильгельмина Ш.' && task.paused === false);
      this.pausedTasks = tasks.filter(task => task.paused === true);
      this.unassignedTasks = tasks.filter(task => task.executorName === 'Любой сотрудник')
    }
}
