import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
private firstname : string = "Mohan";
private lastname : string = "Agarwal";
  constructor() { }

  ngOnInit() {
  }

}
