import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[yourIf]'
})
export class YourIfDirective {

  constructor(private viewContainerRef : ViewContainerRef,private templateRef : TemplateRef<any>) { }

  @Input() set yourIf(stt : boolean){
    if(stt){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else{
      this.viewContainerRef.clear();
    }
  }

}
