import { Component, Input } from '@angular/core';
import { SvgIconsService } from '../../../services/svg-icons.service';
import { NgFor } from '@angular/common';
import { tasks } from '../../../services/task-data.service';

@Component({
  selector: 'app-task-card',
  imports: [NgFor],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task: any;

  constructor(private svgIconService: SvgIconsService) { }

  getIconUrl(status: string): string | null {
    return this.svgIconService.getIconUrl(status);
  }

  getProjectIcon(project: string): string | null {
    return this.svgIconService.getIconUrl(project);
  }

  getTypeIcon(type: string): string | null {
    return this.svgIconService.getIconUrl(type);
  }

  getErrorTypeIcon(errorType: string): string | null {
    return this.svgIconService.getIconUrl(errorType);
  }
}
