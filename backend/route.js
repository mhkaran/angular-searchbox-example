const express = require('express');
const router = express.Router();
const employee = require('./controller/employee');


router.get('/employee/search', async (req, res) =>{

    let statusCode = 200;
    let  resMsg;
    try{
        let query = req.query.query;
        let skip = req.query.skip;
        let limit = req.query.limit;
        resMsg = JSON.stringify(await employee.search(query,skip,limit));
    }
    catch(e)
    {
        statusCode = 500
        resMsg = 'error : ' + e;
    }
    res.status(statusCode).end(resMsg);
});

router.post('/employee/create', async (req, res) =>{

    let statusCode = 200;
    let  resMsg;
    try{
        resMsg =  JSON.stringify(await employee.create(req.body));
    }
    catch(e)
    {
        statusCode = 500
        resMsg = 'error : ' + e;
    }
    res.status(statusCode).end(resMsg);
});

module.exports = router;