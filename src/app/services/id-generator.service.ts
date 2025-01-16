import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {

  private taskId: number = 0;
  private personId: number = 0;

  constructor() { }

  generateId(name: 'task' | 'person'): any {
    if (name === 'task') {
      this.taskId++;
      return 'TR-' + this.taskId;
    } else if (name === 'person') {
      this.personId++;
      return this.personId;
    }
    throw new Error('Invalid name parameter');
  }

}