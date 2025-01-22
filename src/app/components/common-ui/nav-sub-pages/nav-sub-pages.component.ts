import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { taskDataService } from '../../../services/task-data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-nav-sub-pages',
  imports: [RouterLink, RouterLinkActive, RouterModule, NgFor],
  templateUrl: './nav-sub-pages.component.html',
  styleUrl: './nav-sub-pages.component.scss'
})
export class NavSubPagesComponent implements OnInit {
  number!: any[];
  status: string = '';
  filteredTasks!: any[];
  statuses = [
    { name: 'На согласовании', status: 'agreement', routerLink: '/main/toBeAgreed' },
    { name: 'На ревью', status: 'review', routerLink: '/main/onReview' },
    { name: 'Для работы', status: 'execution', routerLink: '/main/forWork' },
    { name: 'Черновики', status: 'draft', routerLink: '/main/drafts' }
  ]

  constructor(private dataService: taskDataService) { };
  onStatusChange(status: string): void {
    this.status = status;
    console.log(this.status);
  }
  ngOnInit(): void {
    this.number = this.dataService.getTasks()
    console.log(this.statuses)
  }
  getTaskCount(status: string): number {
    return this.number.filter(task => task.status === status).length;
  }
  filterTasks(status: string): void {
    this.filteredTasks = this.number.filter(task => task.status === status);
  }


}
