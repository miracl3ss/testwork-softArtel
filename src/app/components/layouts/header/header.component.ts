import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "../../common-ui/menu/menu.component";
import { BtnCreateComponent } from "../../common-ui/btn-create/btn-create.component";

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, MenuComponent, BtnCreateComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // @Component({
  //   selector: 'my-app',
  //   template: `
  //   Uptime: {{ timeAgo | amDuration:'seconds' }}
  // `,
  //   styles: [ '']
  // })
  // export class AppComponent  {
  //   timeAgo = 0;
  //   private autoSaveInterval: number = setInterval(() => {
  //     this.timeAgo++;
  //     console.log(this.timeAgo)
  //   }, 1000);
  //   name = 'Angular ' + VERSION.major;
  
  // }
  
}