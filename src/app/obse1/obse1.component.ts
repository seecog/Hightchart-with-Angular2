import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-obse1',
  templateUrl: './obse1.component.html',
  styleUrls: ['./obse1.component.css']
})
export class Obse1Component implements OnInit {
private mySubscription : any;
  constructor() { }

  ngOnInit() {
    this.getNewRecord();
//     this.mySubscription = this.getRecord().subscribe(
//       (res) => {
// console.log('The response is ',res);
//       },
//       (err) => {
//         console.log('The error is ', err);
//       })
  }

  getNewRecord(){
    
let x = interval(1000);
x.subscribe((y)=>{
  console.log("The data is ",y);
})
  }

  getRecord() {
     return new Observable((observer) => {

      setTimeout(function () {
        observer.next(1000);
      }, 1000);

      setTimeout(function () {
        //observer.next(2000);
        observer.error("Some error came");
      }, 3000);

      setTimeout(function () {
        observer.complete()
      }, 5000);

    })
  }

  removeSubscription(){
    //alert("Removed")
    this.mySubscription.unsubscribe();
  }

}
