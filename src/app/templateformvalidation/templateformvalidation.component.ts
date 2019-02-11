import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateformvalidation',
  templateUrl: './templateformvalidation.component.html',
  styleUrls: ['./templateformvalidation.component.css']
})
export class TemplateformvalidationComponent  {
@ViewChild('f') frmData : NgForm;
  
registerRecord(){
  console.log('The submitted data is ',this.frmData.value);
    }

  saveRecord(frm){
    console.log("The record is ",frm.value)
  }

  reset(){
    this.frmData.reset();
  }

 

}
