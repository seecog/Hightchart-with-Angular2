import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin, merge, interval } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { take, concatAll } from 'rxjs/operators';
import * as Rx from 'rxjs';
declare var Highcharts: any;
@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   

ngOnInit(){
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
}

}
