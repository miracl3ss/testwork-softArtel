import { Injectable } from '@angular/core';

export interface Task {
  id: string;
  status: string;
  progress: number;
  stages: { name: string; color: string }[];
  project: string;
  product: string;
  type: string;
  errorType: string;
}

Injectable({
  providedIn: 'root'
})

export const tasks: Task[] = [
  {
    id: 'TR-321',
    status: 'status-agreement',
    progress: 0,
    stages: [
      { name: 'Stage 1', color:'red' },
      { name: 'Stage 2', color: 'green' },
      { name: 'Stage 3', color: 'blue' }
    ],
    project: 'project1',
    product: 'Product 1',
    type: 'type1',
    errorType: 'error1'
  },
  {
    id: 'task-2',
    status: 'in_progress',
    progress: 50,
    stages: [
      { name: 'Stage 1', color:'red' },
      { name: 'Stage 2', color: 'green' },
      { name: 'Stage 3', color: 'blue' }
    ],
    project: 'project2',
    product: 'Product 2',
    type: 'type2',
    errorType: 'error2'
  },
  {
    id: 'task-3',
    status: 'done',
    progress: 100,
    stages: [
      { name: 'Stage 1', color:'red' },
      { name: 'Stage 2', color: 'green' },
      { name: 'Stage 3', color: 'blue' }
    ],
    project: 'project1',
    product: 'Product 3',
    type: 'type1',
    errorType: 'error1'
  }
];