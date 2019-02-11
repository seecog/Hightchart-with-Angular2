import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-mypromise1',
  templateUrl: './mypromise1.component.html',
  styleUrls: ['./mypromise1.component.css']
})
export class Mypromise1Component implements OnInit {
  rawArray = ["India","Usa","Britain"]
  myArray: number[] = [];
  constructor(private httpClient : HttpClient) { }

  async ngOnInit() {
    // this.getPromiseRecord().then((res) => {
    //   console.log('The max response is ', res);
    // })
    //   .catch((err) => {
    //     console.log('The mega err is ', err)
    //   })

    // this.getFinalRecordList().subscribe((res)=>{
    //   console.log('The final tiger is ',res);
    // })

    var resResult = await this.getRecord2();
console.log('The result is '+resResult);
//    Promise.all([this.getRecord1(),this.getRecord2()]).then((res)=>{
// console.log('The final response is ',res);
//    })
//    .catch((err)=>{
//      console.log('The error is ',err);

//    })
  }

getFinalRecordList(){
  let ob1 = this.httpClient.get("https://reqres.in/api/users?page=2");
  let ob2 = this.httpClient.get("https://reqres.in/api/users?page=2");
  let ob3 = this.httpClient.get("https://reqres.in/api/users?page=2");
  return forkJoin([ob1,ob2,ob3])
}


  getRecord2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([111,222,333]);
      },2000);
    });
  }


  getRecord1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([11,22,33]);
      },2000);
    });
  }


  getPromiseRecord() {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        reject("There is some problem here.")
      }, 5000);

    });
  }

}
