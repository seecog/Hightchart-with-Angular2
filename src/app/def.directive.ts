import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appDef]'
})
export class DefDirective {

  constructor(private renderer : Renderer,private ele : ElementRef) { }
  
//HostListener is decorator
@HostListener('mouseenter') getMouseOverActivity(){
  this.renderer.setElementStyle(this.ele.nativeElement,'color','red')
  this.renderer.setElementStyle(this.ele.nativeElement,'font-family','georgia')
  this.renderer.setElementStyle(this.ele.nativeElement,'font-size','12px')
}

@HostListener('mouseleave') getMouseLeaveActivity(){
  this.renderer.setElementStyle(this.ele.nativeElement,'color','green')
}

}
