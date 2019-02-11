import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class MyforDirective {

  constructor(private viewContainerRef : ViewContainerRef,private templateRef : TemplateRef<any>) { }

  @Input() set myIf(x : boolean){
if(x){
  this.viewContainerRef.createEmbeddedView(this.templateRef)
}
else{
  this.viewContainerRef.clear();
}
  }

}

/*
var obj = {
  name : "Sachin",
  age : 21,
  set putName(nm){
    this.name = nm
  },
  get getName(){
    return this.name;
  }
}

obj.putName = "Ajit"
console.log('The details are ',obj.getName)
*/