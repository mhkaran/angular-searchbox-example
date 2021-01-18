export class EmployeeData {
    data:Array<IEmployee>;
    count:number;
}

export interface IEmployee
{
    name:string
    email:string
    department:string
}