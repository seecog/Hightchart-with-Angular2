import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[myLoop]'
})
export class MyloopDirective {

  constructor(private viewContaineRef : ViewContainerRef,private templateRef : TemplateRef<any>) { }

@Input() set myLoop(n : number){
  
for(let i=1;i<=n;i++){
  this.viewContaineRef.createEmbeddedView(this.templateRef);
}

}

}
