import { Directive, ElementRef, Renderer, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appThisdir]'
})
export class ThisdirDirective implements OnInit{

  constructor(private renderer : Renderer,private ele : ElementRef) { }

ngOnInit(){

}

@HostListener('mouseenter')  action1(){
  this.renderer.setElementStyle(this.ele.nativeElement,'color','red')
  this.renderer.setElementStyle(this.ele.nativeElement,'font-size','20px')

}


@HostListener('mouseleave')  action2(){
  this.renderer.setElementStyle(this.ele.nativeElement,'color','green')
  this.renderer.setElementStyle(this.ele.nativeElement,'font-size','14px')
}

}
