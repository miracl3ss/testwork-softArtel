import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-filter',
  imports: [NgFor, FormsModule, ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {
  filterForm!: FormGroup;
filteredData!: any[];
originalData!: any[];

constructor(private dataService: DataService) { }

ngOnInit(): void {
  this.filterForm = new FormGroup({
    name: new FormControl('')
  });
  this.originalData = this.dataService.getDataProducts().map((item) => ({name: item.name}));
  this.filteredData = [...this.originalData];
  console.log(this.filteredData!, this.originalData)
}

applyFilter() {
  const name = this.filterForm.get('name')?.value?.toLowerCase();
  console.log(this.originalData)
  // Примените фильтр к данным
  this.filteredData = this.originalData.filter(item => {
    return (name? item.name.toLowerCase().includes(name) : true);
  });
}
}
