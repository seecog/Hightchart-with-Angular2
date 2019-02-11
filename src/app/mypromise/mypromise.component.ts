import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypromise',
  templateUrl: './mypromise.component.html',
  styleUrls: ['./mypromise.component.css']
})
export class MypromiseComponent implements OnInit {

  constructor() { }

   ngOnInit() {

    Promise.all([this.getRecord(),this.getRecord2(),this.getRecord3()]).then((res)=>{
      console.log('The final output is ',parseInt(res[0]+'')+parseInt(res[1]+'')+parseInt(res[2]+''))
    })
    .catch((err)=>{
      console.log('The error is ',err);
    })
    //var res = await this.getRecord();
    //console.log('The response is ',parseInt(res+'')+20);
    //console.log('The response is ',res);
// this.getRecord().then((res)=>{
// console.log('The response is ',parseInt(res+'')+20);
// })
// .catch((err)=>{
// console.log('The error is ',err);
// });
  
// var res1 = this.getTData();
// console.log(res1+20);
  }

  getRecord(){
    return new Promise((resolve,reject)=>{

setTimeout(()=>{
resolve(10);
//reject('Some error came')
},1000);

    });
  }

  getRecord2(){
    return new Promise((resolve,reject)=>{

setTimeout(()=>{
resolve(120);
//reject('Some error came')
},2000);

    });
  }

  getRecord3(){
    return new Promise((resolve,reject)=>{

setTimeout(()=>{
resolve(30);
//reject('Some error came')
},4000);

    });
  }

  getTData(){
    var a = 0;
    setTimeout(()=>{
      a = 10;
    },4000);
    return a;
  }

 

}
