import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SvgIconsService {
  private icons: { [name: string] : string } = {};

  constructor(private http: HttpClient) { }

    // this.icons = {
    //   'status-agreement': '/assets/ic_StatusTask_16.svg',
    //   'status-execution': '/assets/ic_StatusTask_16-1.svg',
    //   'status_review': '/assets/ic_StatusTask_16-2.svg',
    //   'status_deploy': '/assets/ic_StatusTask_16-3.svg',
    //   'status_testing': '/assets/ic_StatusTask_16-4.svg',
    //   'status_closed': '/assets/ic_StatusTask_16-5.svg',
    //   'type_ios': '/assets/Platform.svg',
    //   'type_android': '/assets/Platform-1.svg',
    //   'type_website': '/assets/Platform-2.svg',
    //   'type_backend': '/assets/type.svg',
    //   'type_webapp': '/assets/Platform-3.svg',
    //   'type_custom': '/assets/ic_StatusTask_16-2.svg',
    //   'error_block': '/assets/ic_bug_16/off.png',
    //   'error_critical': '/assets/ic_bug_16/off-1.png',
    //   'error_important': '/assets/ic_bug_16/off-2.png',
    //   'error_minor': '/assets/ic_bug_16/off-3.png',
    //   'error_trivial': '/assets/ic_bug_16/off-4.png',
    //   'task_frontend': '/assets/icon_task/dev.png',
    //   'task_backend': '/assets/icon_task/dev-back.png',
    //   'task_test': '/assets/icon_task/qa.png',
    //   'task_design': '/assets/icon_task/design.png',
    //   'task_analytics': '/assets/icon_task/analiticks.png',
    // };
  getIconCode(name: string): Observable<string> {
    const url = `assets/${name}.svg`;
    console.log('name:' + name)
    return this.http.get(url, { responseType: 'text' });
  }
}
