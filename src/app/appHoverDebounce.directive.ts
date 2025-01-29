import { Directive, ElementRef, OnInit, OnDestroy, Renderer2, HostListener, ViewChild, ContentChild, Input } from '@angular/core';
import { MouseHoverService } from './services/mouse-hover.service';
import { HtmlParser } from '@angular/compiler';

@Directive({
  selector: '[appHoverDebounce]'
})
export class HoverDebounceDirective {
  @Input() taskFooterElement!: ElementRef;
  @Input() taskElement!: ElementRef;
  @Input() hiddenActionsElement!: ElementRef;
  @Input() hiddenActionsInWorkElement!: ElementRef;
  @Input() taskHeaderElement!: ElementRef;
  @Input() hiddenPathElement!: ElementRef;
  @Input() typeOfTask!: boolean;

  memoryElement!: HTMLElement[];

  
  
   constructor(
    private elementRef: ElementRef,
    private mouseHoverService: MouseHoverService
  ) { 
    
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    if(this.typeOfTask == true) {
      this.hiddenActionsElement = this.hiddenActionsInWorkElement      
    } 
    const targetElement = event.target;

    if (targetElement) {
      switch (targetElement) {
        case this.taskFooterElement.nativeElement:
          console.log(this.hiddenActionsElement.nativeElement, this.taskFooterElement.nativeElement);
          this.mouseHoverService.toggle([this.hiddenActionsElement.nativeElement, this.taskFooterElement.nativeElement]);
          break;
        case this.taskHeaderElement.nativeElement:
          this.mouseHoverService.toggle([this.hiddenPathElement.nativeElement])
          break;
      }
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    if (event.target == this.taskElement.nativeElement) {
      this.mouseHoverService.hide([this.hiddenPathElement.nativeElement, this.hiddenActionsElement.nativeElement])
      this.mouseHoverService.show([this.taskFooterElement.nativeElement])
    } else if (event.target == this.hiddenActionsElement.nativeElement) {
      this.mouseHoverService.toggle([this.hiddenActionsElement.nativeElement, this.taskFooterElement.nativeElement])
    } else if (event.target == this.taskHeaderElement.nativeElement) {
      this.mouseHoverService.hide([this.hiddenPathElement.nativeElement])
    }
  }
}