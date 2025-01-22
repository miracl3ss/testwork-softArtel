import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SvgIconsService {

  constructor(private http: HttpClient) { }

  getIconCode(name: string): Observable<string> {
    const url = `assets/${name}.svg`;
    return this.http.get(url, { responseType: 'text' });
  }
}
