import { Injectable } from '@angular/core';
import { IdGeneratorService } from './id-generator.service';
import { getPersonIcon, Persons } from './person-data.service';

export interface Task {
  id: string;
  status: string;
  name: string;
  executorIcon: string | null;
  executorName: string;
  stages: { name: string; progress: string }[];
  project: string;
  product: string;
  icon: string;
  timeRequested: number | null;
  timeInWork: number | null;
  paused: boolean;
  inWork: boolean;
  functionCorrect: boolean,
  function: string,
  version: string
}

@Injectable({
  providedIn: 'root'
})

export class taskDataService {
private IdGenerator = new IdGeneratorService();

public tasks: Task[] = [
  {
    id: this.IdGenerator.generateId('task'),
    status: 'execution',
    name: 'Разработка нового компонента для отображения графиков',
    executorIcon: getPersonIcon('Вильгельмина Ш.'),
    executorName: 'Вильгельмина Ш.',
    stages: [
      { name: 'Stage 1', progress: 'inWork' },
      { name: 'Stage 2', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' }
    ],
    project: 'Simplanum',
    product: 'ios',
    icon: 'frontend',
    timeRequested: 5,
    timeInWork: 0,
    paused: false,
    inWork: true,
    functionCorrect: true,
    function: 'Вопрос по процедуре',
    version: '1.12'
  },
  {
    id: this.IdGenerator.generateId('task'),
    status: 'agreement',
    name: 'Разработка нового компонента для отображения графиков',
    executorIcon: getPersonIcon('Вильгельмина Ш.'),
    executorName: 'Вильгельмина Ш.',
    stages: [
      { name: 'Stage 1', progress: 'inWork' },
      { name: 'Stage 2', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' }
    ],
    project: 'Simplanum',
    product: 'android',
    icon: 'backend',
    timeRequested: 5,
    timeInWork: 0,
    paused: false,
    inWork: false,
    functionCorrect: true,
    function: 'Вопрос по процедуре',
    version: '1.12'
  },
  {
    id: this.IdGenerator.generateId('task'),
    status: 'status-execution',
    name: 'Разработка нового компонента для отображения графиков',
    executorIcon: getPersonIcon('Вильгельмина Ш.'),
    executorName: 'Вильгельмина Ш.',
    stages: [
      { name: 'Stage 1', progress: 'inWork' },
      { name: 'Stage 2', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' }
    ],
    project: 'Simplanum',
    product: 'iOS',
    icon: 'Frontend',
    timeRequested: 5,
    timeInWork: 0,
    paused: false,
    inWork: false,
    functionCorrect: true,
    function: 'Вопрос по процедуре',
    version: '1.12'
  },
  {
    id: this.IdGenerator.generateId('task'),
    status: 'status-execution',
    name: 'Разработка нового компонента для отображения графиков',
    executorIcon: getPersonIcon('Вильгельмина Ш.'),
    executorName: 'Вильгельмина Ш.',
    stages: [
      { name: 'Stage 1', progress: 'inWork' },
      { name: 'Stage 2', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' }
    ],
    project: 'Simplanum',
    product: 'iOS',
    icon: 'Frontend',
    timeRequested: 5,
    timeInWork: 0,
    paused: false,
    inWork: false,
    functionCorrect: true,
    function: 'Вопрос по процедуре',
    version: '1.12'
  },
  {
    id: this.IdGenerator.generateId('task'),
    status: 'status-execution',
    name: 'Разработка нового компонента для отображения графиков',
    executorIcon: getPersonIcon('Вильгельмина Ш.'),
    executorName: 'Вильгельмина Ш.',
    stages: [
      { name: 'Stage 1', progress: 'inWork' },
      { name: 'Stage 2', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' }
    ],
    project: 'Simplanum',
    product: 'iOS',
    icon: 'Frontend',
    timeRequested: 5,
    timeInWork: 0,
    paused: false,
    inWork: false,
    functionCorrect: true,
    function: 'Вопрос по процедуре',
    version: '1.12'
  },
  {
    id: this.IdGenerator.generateId('task'),
    status: 'status-execution',
    name: 'Разработка нового компонента для отображения графиков',
    executorIcon: getPersonIcon('Вильгельмина Ш.'),
    executorName: 'Вильгельмина Ш.',
    stages: [
      { name: 'Stage 1', progress: 'inWork' },
      { name: 'Stage 2', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' }
    ],
    project: 'Simplanum',
    product: 'iOS',
    icon: 'Frontend',
    timeRequested: 5,
    timeInWork: 0,
    paused: false,
    inWork: false,
    functionCorrect: true,
    function: 'Вопрос по процедуре',
    version: '1.12'
  },
  {
    id: this.IdGenerator.generateId('task'),
    status: 'status-execution',
    name: 'Разработка нового компонента для отображения графиков',
    executorIcon: getPersonIcon('Вильгельмина Ш.'),
    executorName: 'Вильгельмина Ш.',
    stages: [
      { name: 'Stage 1', progress: 'inWork' },
      { name: 'Stage 2', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' }
    ],
    project: 'Simplanum',
    product: 'iOS',
    icon: 'Frontend',
    timeRequested: 5,
    timeInWork: 0,
    paused: false,
    inWork: false,
    functionCorrect: true,
    function: 'Вопрос по процедуре',
    version: '1.12'
  },
  {
    id: this.IdGenerator.generateId('task'),
    status: 'status-execution',
    name: 'Разработка нового компонента для отображения графиков',
    executorIcon: getPersonIcon('Вильгельмина Ш.'),
    executorName: 'Вильгельмина Ш.',
    stages: [
      { name: 'Stage 1', progress: 'inWork' },
      { name: 'Stage 2', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' }
    ],
    project: 'Simplanum',
    product: 'iOS',
    icon: 'Frontend',
    timeRequested: 5,
    timeInWork: 0,
    paused: false,
    inWork: false,
    functionCorrect: true,
    function: 'Вопрос по процедуре',
    version: '1.12'
  },
  {
    id: this.IdGenerator.generateId('task'),
    status: 'status-execution',
    name: 'Разработка нового компонента для отображения графиков',
    executorIcon: getPersonIcon('Вильгельмина Ш.'),
    executorName: 'Вильгельмина Ш.',
    stages: [
      { name: 'Stage 1', progress: 'inWork' },
      { name: 'Stage 2', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' }
    ],
    project: 'Simplanum',
    product: 'iOS',
    icon: 'Frontend',
    timeRequested: 5,
    timeInWork: 0,
    paused: false,
    inWork: false,
    functionCorrect: true,
    function: 'Вопрос по процедуре',
    version: '1.12'
  },
  {
    id: this.IdGenerator.generateId('task'),
    status: 'status-execution',
    name: 'Разработка нового компонента для отображения графиков',
    executorIcon: getPersonIcon('Вильгельмина Ш.'),
    executorName: 'Вильгельмина Ш.',
    stages: [
      { name: 'Stage 1', progress: 'inWork' },
      { name: 'Stage 2', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' }
    ],
    project: 'Simplanum',
    product: 'iOS',
    icon: 'Frontend',
    timeRequested: 5,
    timeInWork: 0,
    paused: false,
    inWork: false,
    functionCorrect: true,
    function: 'Вопрос по процедуре',
    version: '1.12'
  },
];
}