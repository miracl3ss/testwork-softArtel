import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  imports: [NgFor, NgClass],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input() options!: { icon: any; name: string; }[];
  @Input() title!: string;
  @Output() selected = new EventEmitter();
  
  isOpen = false;
  label!: { icon: any; name: string; };
  
  ngOnInit(): void {
    if (this.options && this.options.length > 0) {
      this.label = this.options[0];
    }
  }
  
  toggleOpen() {
    this.isOpen =!this.isOpen;
  }

  selectOption(option: { icon: any; name: string; }) {
    this.label = option;
    this.selected.emit(option);
    this.isOpen = false;
  }
}
