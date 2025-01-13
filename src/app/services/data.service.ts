import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataProducts = [
    { id: 1, name: "Название №1" },
    { id: 2, name: "Название №2" },
    { id: 3, name: "Название №3" }
  ];

  getDataProducts() {
    return this.dataProducts;
  }

}
