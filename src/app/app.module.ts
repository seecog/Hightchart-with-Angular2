import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';   

import {CheckboxModule} from 'primeng/checkbox';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ProductsComponent } from './parent/products/products.component';
import { ProductComponent } from './parent/products/product/product.component';
import { ManagerComponent } from './parent/products/manager/manager.component';
import { EmpComponent } from './parent/products/manager/emp/emp.component';
import { Obse1Component } from './obse1/obse1.component';
import { AbcDirective } from './abc.directive';
import { DefDirective } from './def.directive';
import { Onser2Component } from './onser2/onser2.component';
import { YourdirDirective } from './yourdir.directive';
import { ThisdirDirective } from './thisdir.directive';
import { Thisdir2Directive } from './thisdir2.directive';
import { MyforDirective } from './myfor.directive';
import { MyloopDirective } from './myloop.directive';              //api
import { HttpClientModule } from '@angular/common/http';
import { YourloopDirective } from './yourloop.directive';
import { YourIfDirective } from './your-if.directive';
import { Mypromise1Component } from './mypromise1/mypromise1.component';
import { MypromiseComponent } from './mypromise/mypromise.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TemplateformvalidationComponent } from './templateformvalidation/templateformvalidation.component';
import { Reactiveformval1Component } from './reactiveformval1/reactiveformval1.component';
import { EmployeeComponent } from './employee/employee.component';
import { ChartModule } from 'angular2-highcharts';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    ProductComponent,
    ManagerComponent,
    EmpComponent,
    Obse1Component,
    AbcDirective,
    DefDirective,
    Onser2Component,
    YourdirDirective,
    ThisdirDirective,
    Thisdir2Directive,
    MyforDirective,
    MyloopDirective,
    YourloopDirective,
    YourIfDirective,
    Mypromise1Component,
    MypromiseComponent,
    TemplateformvalidationComponent,
    Reactiveformval1Component,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AccordionModule,
    CalendarModule,
    FormsModule,
    CheckboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
