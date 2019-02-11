import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveformval1',
  templateUrl: './reactiveformval1.component.html',
  styleUrls: ['./reactiveformval1.component.css']
})
export class Reactiveformval1Component implements OnInit {
private frm : FormGroup;
  constructor(private _fb : FormBuilder) { }

  ngOnInit(){
this.frm = this._fb.group({
  fnm : [null,[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern('^[a-zA-Z]+$')]],
  lnm : [null,[Validators.required,Validators.maxLength(10)]]
})
  }

  // ngOnInit() {
  //   this.frm = new FormGroup({
  //     fnm : new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern('^[a-zA-Z]+$')]),
  //     lnm : new FormControl(null,[Validators.required,Validators.maxLength(10)])
  //   })
  // }

  saveRecord(){
    console.log('The data is ',this.frm.value)
  }

}
