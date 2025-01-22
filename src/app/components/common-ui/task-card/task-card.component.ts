import { Component, Input, OnChanges, SimpleChanges, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BehaviorSubject, forkJoin, of, Subscription } from 'rxjs';
import { SvgIconsService } from '../../../services/svg-icons.service';
import { Task, taskDataService } from '../../../services/task-data.service';
import { map, catchError, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { NgClass, NgFor } from '@angular/common';

@Component({
  imports: [NgFor, NgClass],
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnChanges, OnDestroy {
  @Input() tasks!: Task[] | any[];

  svgCodes: { [taskId: string]: { [key: string]: SafeHtml | null } } = {};
  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  private subscription: Subscription = new Subscription();

  constructor(
    private svgIconService: SvgIconsService,
    private sanitizer: DomSanitizer,
    private taskDataService: taskDataService,
    private cdr: ChangeDetectorRef
  ) {
    this.subscription = this.tasksSubject
      .pipe(
        distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)),
        debounceTime(100),
        switchMap(() => this.loadSvgCodes())
      )
      .subscribe();
  }

  ngOnInit(): void {
    // this.loadSvgCodes();
    console.log(this.tasks)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tasks'] && changes['tasks'].currentValue) {
      console.log('Tasks:', this.tasks);
      this.tasksSubject.next(this.tasks);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private async loadSvgCodes(): Promise<void> {
    const tasks = this.tasksSubject.getValue();
    if (!tasks || tasks.length === 0) {
      return;
    }

    const iconNames = Array.from(
      new Set(
        tasks.flatMap(task => [
          task.product,
          task.status
        ]).filter(iconName => iconName !== null)
      )
    );

    if (iconNames.length === 0) {
      return;
    }

    const svgCodeObservables = iconNames.map(iconName => {
      return this.svgIconService.getIconCode(iconName!).pipe(
        map((response: string) => ({ iconName, svgCode: response })),
        catchError((error) => {
          console.error('Failed to retrieve SVG code for', iconName, error);
          return of({ iconName, svgCode: '' });
        })
      );
    });

    try {
      const svgCodeResults = await forkJoin(svgCodeObservables).toPromise();
      if (!svgCodeResults) {
        console.error('No results from forkJoin');
        return;
      }

      const svgCodeMap = svgCodeResults.reduce((acc, { iconName, svgCode }) => {
        acc[iconName] = this.sanitizer.bypassSecurityTrustHtml(svgCode);
        return acc;
      }, {} as { [key: string]: SafeHtml });

      this.svgCodes = tasks.reduce((acc, task) => {
        acc[task.id] = {
          product: task.product !== null ? svgCodeMap[task.product] : null,
          status: task.status !== null ? svgCodeMap[task.status] : null
        };
        return acc;
      }, {} as { [taskId: string]: { [key: string]: SafeHtml | null } });
      console.log(this.svgCodes)
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Error loading SVG codes:', error);
    }
  }
}