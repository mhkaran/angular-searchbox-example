import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import {EmployeeData} from './employee.model'
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService{

baseUrl='http://localhost:3000/employee/search?';
searchParam='';

constructor(private httpClient:HttpClient) { }

getEmployee():Observable<EmployeeData>{
    return this.httpClient.get<EmployeeData>(this.baseUrl+this.searchParam).
    pipe(catchError(this.handleError)); 
  }

  private handleError(errorResponse: HttpErrorResponse){
    return throwError('Error while fetching employee data'); 
  }

}