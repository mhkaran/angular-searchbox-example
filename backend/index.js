  
const express = require('express')
const app = express()
const appconfig = require('./appconfig.json')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./route.js');

// mongoose connection
mongoose.connect(appconfig.mongodb.url,{ useNewUrlParser: true, server:{ poolSize:appconfig.poolSize } });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', err => {console.log('MongoDB connection error - ',err)});
db.on('connected',()=>{console.log('MongoDB connected successful:')});

// body json parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// write some pre request logic here  
app.use((req,res,next)=>{
    next();
});

//set cors enable for whole site
app.use(cors());
app.options('*', cors());

//set route
app.use('/', route);



app.listen(appconfig.port, () => console.log('Example app listening on port ' + appconfig.port + ' !'))