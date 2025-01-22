import { Component, OnChanges, OnInit } from '@angular/core';
import { DropdownListComponent } from "../../common-ui/dropdown-list/dropdown-list.component";
import { DataService } from '../../../services/data.service';
import { PathService } from '../../../services/path.service';
import { taskDataService } from '../../../services/task-data.service';

@Component({
  selector: 'app-drafts-sub',
  imports: [DropdownListComponent],
  templateUrl: './drafts-sub.component.html',
  styleUrl: './drafts-sub.component.scss'
})
export class DraftsSubComponent implements OnInit, OnChanges {
myTasks: any[] = [];
    pausedTasks: any[] = [];
    unassignedTasks: any[] = [];
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
      console.log(this.path);
      this.filterTask(this.path);
      }
    
    ngOnChanges(changes: any) {
      if (changes.path) {
      this.path = this.pathService.getPath();
      console.log(this.path);
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
      console.log('статус:' + status, 'path' + this.path)
      const tasks = this.taskDataService.getFilteredTasks(status);
      console.log(this.taskDataService.getFilteredTasks(status));
      this.myTasks = tasks.filter(task => task.executorName === 'Вильгельмина Ш.' && task.paused === false);
      this.pausedTasks = tasks.filter(task => task.paused === true);
      this.unassignedTasks = tasks.filter(task => task.executorName === 'Любой сотрудник')
    }
}
