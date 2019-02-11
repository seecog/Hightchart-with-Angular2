import { TestBed } from "@angular/core/testing";
import { EmployeeComponent } from './employee.component';
import { AppComponent } from '../app.component';


describe("Testing the employee component",()=>{

beforeEach(()=>{
  TestBed.configureTestingModule({
    declarations : [EmployeeComponent]
  })
})

it("It should create the EmployeeComponent object",()=>{

var fixture =  TestBed.createComponent(EmployeeComponent);
var app = fixture.debugElement.componentInstance;
expect(app).toBeTruthy();

});

it("Check for values of data members firstname",()=>{
var fixture = TestBed.createComponent(EmployeeComponent);
var app = fixture.debugElement.componentInstance;
expect(app.firstname).toEqual('Mohan')
});

it('Check for lastname',()=>{
  var fixture = TestBed.createComponent(EmployeeComponent);
  var app = fixture.debugElement.componentInstance;
  expect(app.lastname).toEqual("Agarwal");
})







});