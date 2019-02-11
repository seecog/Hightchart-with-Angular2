import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent  {
pmsg : string;
  

  getEmployeeInfo(msg){
this.pmsg = msg;
  }

}


