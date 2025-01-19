import { Injectable } from '@angular/core';
import { IdGeneratorService } from './id-generator.service';
import { generate } from 'rxjs';

Injectable({
  providedIn: 'root'
})

export interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
  icon: string | null;
}

export const Persons: Person[] = [
  {
    id: new IdGeneratorService().generateId('person'),
    name: 'Вильгельмина Ш.',
    age: 20,
    email: '',
    icon: 'Vilgelmina.png'
  }
];

export function getPersonIcon(name: string): string | null {
  const person = Persons.find(p => p.name === name);
  const IconPath = '/assets/ExecutorIcons/' + person?.icon
  return IconPath;
}
