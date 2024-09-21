import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomdirective1]'
})
export class Customdirective1Directive {

  constructor(private el: ElementRef,private Rend: Renderer2) { 
  }
  ngOnInit() {
    
    this.Rend.setStyle(this.el.nativeElement, 'background-color', '#FF5F1F');
  }

}
