import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 products : any[] =[
{product_name : "Apple",product_cost : 200,product_pic : "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-250x250.jpg"},
{product_name : "Pineapple",product_cost : 300,product_pic : "http://www.mmfc.coop/wp-content/uploads/2017/03/pineapple-350x350.jpg"},
];
 
}
