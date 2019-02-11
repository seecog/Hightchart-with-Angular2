import { Directive, ElementRef, Renderer, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appThisdir2]'
})
export class Thisdir2Directive implements OnInit{
@Input() appThisdir2;
  constructor(private renderer : Renderer,private ele : ElementRef) { }


  ngOnInit(){
this.renderer.setElementStyle(this.ele.nativeElement,'color',this.appThisdir2)
  }
}
