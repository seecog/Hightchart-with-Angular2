import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
@Output() empinfo  = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireToParent(){
this.empinfo.emit("Hello from child");
  }

}
