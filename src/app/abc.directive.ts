import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAbc]'
})
export class AbcDirective {

  constructor(private renderer : Renderer,private ele : ElementRef) { }

  ngOnInit(){
    this.renderer.setElementStyle(this.ele.nativeElement,'color','red')
  }

}
