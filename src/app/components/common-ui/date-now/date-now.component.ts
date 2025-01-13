import { DatePipe, formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { of } from 'rxjs';
import '@angular/common/locales/global/ru';

@Component({
  selector: 'app-date-now',
  imports: [DatePipe],
  templateUrl: './date-now.component.html',
  styleUrl: './date-now.component.scss',
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'}
  ]
})
export class DateNowComponent {
  currentDate = new Date();
  dateFormat = 'EEEE, d MMMM';
  currentDate$ = of(formatDate(this.currentDate, this.dateFormat, 'ru'));
}
