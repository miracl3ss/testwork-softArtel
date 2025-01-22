import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from "../select/select.component";

@Component({
  selector: 'app-filter',
  imports: [FormsModule, ReactiveFormsModule, SelectComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  @Input() option!: { icon: any; name: string }[];
  @Input() title!: string;

  onSelected($event: any) {
    
  }

}
