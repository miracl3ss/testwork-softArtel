import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PathService {
  private path!: string;

  constructor(private location: Location) { }

  getPath(): string {
    return this.path = this.location.path();
  }

  updatePath(): void {
    this.path = this.location.path();
  }

  ngOnInit(): void {
    this.location.onUrlChange((url: string) => {
      this.updatePath();
    });
  }
}