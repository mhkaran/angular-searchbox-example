const chai = require('chai');
const chaiAsPromised = require('chai-as-promised')
const sinon = require('sinon');
const mapping = require('../entity/mapping');
const modelDatabaseLayer = require('../database/entiryDbLayer');
let mongoose = require("mongoose");
let controller_employee = require('../controller/employee');

const expect = chai.expect;
chai.use(chaiAsPromised);


let schema = mongoose.Schema;
let emlpoyeeSchema = new schema({
    name: { type: String},
    email: { type: String},
    department: { type: String}
});

let emlpoyee =  mongoose.model("emlpoyee", emlpoyeeSchema , "emlpoyee");


let employees = [{
    "_id":"6001990e94ac2b383091233b",
    "name":"karan",
    "email":"karan1@yahoo.com",
    "department":"deOps",
    "__v":0
}]

let req = {
	"name":"karan",
	"email":"karan1@yahoo.com",
	"department":"deOps"
}


describe('controller exployee file',async ()=>{

    beforeEach(()=>{
        sinon.stub(mapping,'employee').returns(Promise.resolve(emlpoyee));
    });

    afterEach(()=>{
        sinon.restore();
    })


    it('successful create employee',async()=>{
        sinon.stub(modelDatabaseLayer,'create').returns(Promise.resolve(true));
        
        let result = await controller_employee.create(req)

        return expect(result).to.be.true;

    });
    it('successful search employee',async()=>{
        sinon.stub(modelDatabaseLayer,'search').returns(Promise.resolve(employees));
        sinon.stub(modelDatabaseLayer,'count').returns(Promise.resolve(1));
        let result = await controller_employee.search(req,"karan");

        return expect(result.data).to.deep.equal(employees);
    });

    it('exception while create employee',async()=>{
        sinon.stub(modelDatabaseLayer,'create').returns(Promise.reject());
        return expect(controller_employee.create(req)).to.be.throw;
    });
    it('exception while search employee',async()=>{
        sinon.stub(modelDatabaseLayer,'search').returns(Promise.reject());
        return expect(controller_employee.search(req,"karan")).to.be.throw
    });
});
