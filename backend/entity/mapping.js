let employee = require('./employee');

module.exports ={

    employee : async (obj)=>{
        if(obj)
        return new employee({
            name : obj.name,
            email : obj.email,
            department : obj.department
        });
        else
        return employee;
    }
}