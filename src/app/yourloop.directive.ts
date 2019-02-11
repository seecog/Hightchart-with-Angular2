import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[yourLoop]'
})
export class YourloopDirective {

  constructor(private viewContainerRef : ViewContainerRef,private templateRef : TemplateRef<any>) { }


@Input() set yourLoop(n : number){
for(let i=1;i<=n;i++){
  this.viewContainerRef.createEmbeddedView(this.templateRef);
}
}

}
/*
<div *yourLoop="7">We all are indians</div>
*/