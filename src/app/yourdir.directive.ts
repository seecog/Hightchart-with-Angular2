import { Directive, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appYourdir]'
})
export class YourdirDirective implements OnInit {

  constructor(private renderer : Renderer,private ele : ElementRef) { }


  ngOnInit(){
this.renderer.setElementStyle(this.ele.nativeElement,'color','red')
  }
}
