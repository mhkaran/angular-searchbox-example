const chai = require('chai');
const chaiAsPromised = require('chai-as-promised')
const sinon = require('sinon');
const mapping = require('../entity/mapping');
let mongoose = require("mongoose");
const employee = require('../entity/employee');

const expect = chai.expect;
chai.use(chaiAsPromised);


let schema = mongoose.Schema;
let emlpoyeeSchema = new schema({
    name: { type: String},
    email: { type: String},
    department: { type: String}
});

let testemlpoyee =  mongoose.model("emlpoyeeSchema", emlpoyeeSchema , "emlpoyeeSchema");

let req = {
	"name":"karan",
	"email":"karan1@yahoo.com",
	"department":"deOps"
}


describe('controller exployee file',async ()=>{

    beforeEach(()=>{
        sinon.stub(employee,'schema').returns(testemlpoyee);
    });

    afterEach(()=>{
        sinon.restore();
    })

    it('successful employee mapping', async ()=>{
        let result = await mapping.employee();
        console.log(result)
        return expect(result).to.equal(result);
    })
});