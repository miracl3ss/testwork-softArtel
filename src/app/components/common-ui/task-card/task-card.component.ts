import { Component, Input, OnChanges, OnInit, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { SvgIconsService } from '../../../services/svg-icons.service';
import { firstValueFrom, map, catchError } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Task, taskDataService } from '../../../services/task-data.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  imports: [NgIf, NgFor],
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit, OnChanges {
  @Input() tasks!: Task[];

  svgCodes: { [taskId: string]: { [key: string]: SafeHtml } } = {};
  product: string = '';

  constructor(
    private svgIconService: SvgIconsService,
    private sanitizer: DomSanitizer,
    private taskDataService: taskDataService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.tasks = this.taskDataService.tasks;
    console.log('TaskCardComponent tasks:', this.tasks);
    this.loadSvgCodes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    
      if (changes['svgCodes']) {
        console.log('svgCodes changed:', changes['svgCodes'].currentValue);
        this.cdr.detectChanges();
      }
    
    if (changes['tasks']) {
      console.log('TaskCardComponent tasks changed:', this.tasks);
      this.loadSvgCodes();
    }
  }

  async loadSvgCodes(): Promise<void> {
    if (!this.tasks || this.tasks.length === 0) {
      return;
    }

    const taskIds = this.tasks.map(task => task.id);
    const svgCodeArrays = await Promise.all(
      taskIds.map(async (taskId) => {
        const task = this.tasks.find(t => t.id === taskId);
        if (!task) {
          console.error(`Task not found with id ${taskId}`);
          return {};
        }

        const iconNames = [task.product, task.executorIcon, task.icon, task.status];
        this.product = task.product;
        const svgCodeArray = await Promise.all(
          iconNames.map(async (name: any) => {
            try {
              const code = await firstValueFrom(this.svgIconService.getIconCode(name).pipe(
                map((response: string) => response),
                catchError((error) => {
                  console.error('Failed to retrieve SVG code for', name, 'in task', taskId, error);
                  return '';
                })
              ));
              if (code) {
                console.log(`Fetched SVG code for ${name} in task ${taskId}:`, code);
              }
              return { [name]: this.sanitizer.bypassSecurityTrustHtml(code) };
            } catch (error) {
              console.error('Failed to retrieve SVG code for', name, 'in task', taskId, error);
              return {};
            }
          })
        );
        return { [taskId]: svgCodeArray.reduce((acc, item) => ({...acc,...item }), {}) };
      })
    );
    this.svgCodes = svgCodeArrays.reduce((acc, item) => ({...acc,...item }), {});
  }
}