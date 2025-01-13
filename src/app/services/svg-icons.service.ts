import { Injectable } from '@angular/core';

interface SvgIcon {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})

export class SvgIconsService {
  private icons: { [name: string]: SvgIcon } = {};

  constructor() {
    this.loadIcons();
  }

  private loadIcons(): void {
    this.icons = {
      'status-agreement': { name: 'agreement', url: '/src/assets/ic_StatusTask_16.svg' },
      'in_progress': { name: 'in_progress', url: 'assets/icons/in_progress.svg' },
      'done': { name: 'done', url: 'assets/icons/done.svg' },
      'project1': { name: 'project1', url: 'assets/icons/project1.svg' },
      'project2': { name: 'project2', url: 'assets/icons/project2.svg' },
      'type1': { name: 'type1', url: 'assets/icons/type1.svg' },
      'type2': { name: 'type2', url: 'assets/icons/type2.svg' },
      'error1': { name: 'error1', url: 'assets/icons/error1.svg' },
      'error2': { name: 'error2', url: 'assets/icons/error2.svg' },
    };
  }

  getIcon(name: string): SvgIcon | null {
    return this.icons[name] || null;
  }

  getIconUrl(name: string): string | null {
    const icon = this.getIcon(name);
    return icon? icon.url : null;
  }
}
