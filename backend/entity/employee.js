/* istanbul ignore file */

var mongoose = require("mongoose");

//Define a schema
var schema = mongoose.Schema;

//module.exports = {

   // schema: ()=>{
        var employeeSchema = new schema({
            name: { type: String},
            email: { type: String},
            department: { type: String}
        });
        
module.exports = mongoose.model("employee", employeeSchema , "employee");
  //  }
//}

