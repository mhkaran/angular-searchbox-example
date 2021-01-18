import { Component, OnInit, Injectable } from '@angular/core';
import {EmployeeData, IEmployee} from "./employee.model";
import {EmployeeService} from './employee.servive'; 
import { literalMap } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
@Injectable()
export class EmployeeComponent implements OnInit {

  employees: Array<IEmployee>;
  count:number;
  name:string
  skip:number=0;
  limit:number = 2
  query:string='';
  ddEmployeesCount:number;
  txtSearch:string='';

  constructor(private _employeeService:EmployeeService) { 
    _employeeService.searchParam =`query=&limit=${this.limit}&skip=${this.skip}`
  }

  ngOnInit() {
    this._employeeService.getEmployee().subscribe(
      (listEmployee)=>{
        this.employees = listEmployee.data;
        this.count = Math.ceil(listEmployee.count/this.limit);
        if (this.count>0) this.ddEmployeesCount=1;
    },err=>console.log(err))
  }

  search(type){
    if  (type!='txt')
      this.skip= (this.ddEmployeesCount-1)*this.limit;
    else
    this.skip= 0;

    this._employeeService.searchParam =`query=${this.txtSearch}&limit=${this.limit}&skip=${this.skip}`
    console.log(this._employeeService.searchParam);
    this._employeeService.getEmployee().subscribe(
      (listEmployee)=>{
        this.employees = listEmployee.data;
        this.count = Math.ceil(listEmployee.count/this.limit);
    },err=>console.log(err))
  }

}
