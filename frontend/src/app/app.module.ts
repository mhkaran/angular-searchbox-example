import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {EmployeeService} from './employee/employee.servive'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }