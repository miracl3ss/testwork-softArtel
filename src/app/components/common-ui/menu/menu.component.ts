import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive, NgClass, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Output() selected = new EventEmitter();
  projects: {name: string, link: string}[] = [
    {name: 'Проекты', link: ''},
    {name: 'Simplanum', link: 'simplanum'},
    {name: 'Rocket', link: 'rocket'}
  ];
  project: {name: string, link: string} = this.projects[0]
  isOpen = false;

  constructor (private router: Router) {}

  toggleOpen() {
    this.isOpen =!this.isOpen;
  }
  selectOption(option: { name: string; link: string; }) {
    this.project = option;
    this.selected.emit(option);
    this.isOpen = false;

  }
  navigateToSimplanum() {
    this.router.navigate(['/projects/simplanum']);
  }
  
  navigateToRocket() {
    this.router.navigate(['/projects/rocket']);
  }
}
