import { Component, OnInit } from '@angular/core';
import { DateNowComponent } from "../../common-ui/date-now/date-now.component";
import { FilterComponent } from "../../common-ui/filter/filter.component";
import { DropdownListComponent } from "../../common-ui/dropdown-list/dropdown-list.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [DateNowComponent, FilterComponent, DropdownListComponent]
})
export class MainComponent {

}
