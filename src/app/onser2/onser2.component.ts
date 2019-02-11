import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-onser2',
  templateUrl: './onser2.component.html',
  styleUrls: ['./onser2.component.css']
})
export class Onser2Component implements OnInit {
private mySubscribe : any;
  constructor() { }

  ngOnInit() {
  this.mySubscribe =  this.getRecord().subscribe(
      (res)=>{
console.log('The data is ',res)
      },
      (err)=>{
        console.log('The error is',err)
      }
    )
  }

  removeSubscription(){
this.mySubscribe.unsubscribe();
  }

  getRecord(){
    return new Observable((observer)=>{

setTimeout(()=>{
observer.next({
  product_name : 'Apple',
  product_cost : 230
});
},1000);

/*setTimeout(()=>{
  observer.error("SOmething wrong");
  },2000);*/

  setTimeout(()=>{
    observer.complete();
    },2000);

setTimeout(()=>{
  observer.next({
    product_name : 'PineApple',
    product_cost : 800
  });
  },3000);

  setTimeout(()=>{
    observer.next({
      product_name : 'Banana',
      product_cost : 100
    });
    },5000);

    })
  }

}
