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
    name: 'Не отображается текст "Пока нет вопросов", если Заказчик откроет Вопросы по процедуре, в которой нет ни одного вопроса',
    executorIcon: getPersonIcon('Вильгельмина Ш.'),
    executorName: 'Вильгельмина Ш.',
    stages: [
      { name: 'Stage 1', progress: 'done' },
      { name: 'Stage 2', progress: 'work' },
      { name: 'Stage 3', progress: 'pause' },
      { name: 'Stage 3', progress: 'wait' }
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
    name: 'Рефакторинг кода модуля авторизации',
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
    timeRequested: 2,
    timeInWork: 0,
    paused: false,
    inWork: false,
    functionCorrect: true,
    function: 'Вопрос по процедуре',
    version: '1.12'
  },
  {
    id: this.IdGenerator.generateId('task'),
    status: 'agreement',
    name: 'Устранить проблемы с кроссбраузерной совместимостью',
    executorIcon: getPersonIcon('Вильгельмина Ш.'),
    executorName: 'Вильгельмина Ш.',
    stages: [
      { name: 'Stage 1', progress: 'inWork' },
      { name: 'Stage 2', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' }
    ],
    project: 'Simplanum',
    product: 'webapp',
    icon: 'err_important',
    timeRequested: null,
    timeInWork: 0,
    paused: true,
    inWork: false,
    functionCorrect: true,
    function: 'Вопрос по процедуре',
    version: '1.12'
  },
  {
    id: this.IdGenerator.generateId('task'),
    status: 'closed',
    name: 'Ошибка валидации формы при пустом поле "номер телефона"',
    executorIcon: getPersonIcon('Вильгельмина Ш.'),
    executorName: 'Вильгельмина Ш.',
    stages: [
      { name: 'Stage 1', progress: 'inWork' },
      { name: 'Stage 2', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' }
    ],
    project: 'Simplanum',
    product: 'website',
    icon: 'err_important',
    timeRequested: null,
    timeInWork: 0,
    paused: true,  
    inWork: false,
    functionCorrect: true,
    function: 'Вопрос по процедуре',
    version: '1.12'
  },
  {
    id: this.IdGenerator.generateId('task'),
    status: 'deploy',
    name: 'Неверное поведение компонента "Главный экран" при изменении размера окна',
    executorIcon: getPersonIcon('Вильгельмина Ш.'),
    executorName: 'Вильгельмина Ш.',
    stages: [
      { name: 'Stage 1', progress: 'inWork' },
      { name: 'Stage 2', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' }
    ],
    project: 'Simplanum',
    product: 'webapp',
    icon: 'err_important',
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
    status: 'review',
    name: 'Разработка нового компонента для отображения графиков',
    executorIcon: getPersonIcon('Любой сотрудник'),
    executorName: 'Любой сотрудник',
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
    inWork: false,
    functionCorrect: true,
    function: 'Вопрос по процедуре',
    version: '1.12'
  },
  {
    id: this.IdGenerator.generateId('task'),
    status: 'execution',
    name: 'Разработка нового компонента для отображения графиков',
    executorIcon: getPersonIcon('Любой сотрудник'),
    executorName: 'Любой сотрудник',
    stages: [
      { name: 'Stage 1', progress: 'inWork' },
      { name: 'Stage 2', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' },
      { name: 'Stage 3', progress: 'notReached' }
    ],
    project: 'Simplanum',
    product: 'website',
    icon: 'frontend',
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
    status: 'execution',
    name: 'Разработка нового компонента для отображения графиков',
    executorIcon: getPersonIcon('Любой сотрудник'),
    executorName: 'Любой сотрудник',
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
    inWork: false,
    functionCorrect: true,
    function: 'Вопрос по процедуре',
    version: '1.12'
  },
  {
    id: this.IdGenerator.generateId('task'),
    status: 'draft',
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
    product: 'backend',
    icon: 'frontend',
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
    product: 'backend',
    icon: 'backend',
    timeRequested: 5,
    timeInWork: 0,
    paused: false,
    inWork: false,
    functionCorrect: true,
    function: 'Вопрос по процедуре',
    version: '1.12'
  },
];

statuses = [
  {name: 'На согласовании', status: 'agreement', routerLink: '/main/toBeAgreed'},
  {name: 'На ревью', status: 'review', routerLink: '/main/onReview'},
  {name: 'Для работы', status: 'execution', routerLink: '/main/forWork'},
  {name: 'Черновики', status: 'draft', routerLink: '/main/drafts'}
]


getTasks(): any[] {
  return this.tasks;
}
getFilteredTasks(status: string) {
  const filteredTasks = this.tasks.filter(task => task.status === status);
  return filteredTasks
}
}