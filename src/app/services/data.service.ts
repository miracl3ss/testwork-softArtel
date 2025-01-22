import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataProducts = [
    { name: 'Все продукты', icon: ''},
    { name: "Название №1", icon: '/assets/filterIcons/simplanum.png' },
    { name: "Название №2", icon: '/assets/filterIcons/simplanum.png' },
    { name: "Название №3", icon: '/assets/filterIcons/rocket.png' }
  ];

  private dataTasks = [
    { name: 'Все задачи', icon: ''},
    { name: 'Общие', icon: '/assets/filterIcons/icon/all.svg'},
    { name: 'Разработка', icon: '/assets/filterIcons/icon/dev.svg'},
    { name: 'Тестирование', icon: '/assets/filterIcons/icon/test.svg'},
    { name: 'Ошибки', icon: '/assets/filterIcons/icon/errors.svg'}
  ]
  getDataProducts() {
    return this.dataProducts;
  }
  getDataTask() {
    return this.dataTasks;
  }

}
