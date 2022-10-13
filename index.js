const express = require('express');
const port = process.env.PORT || 9000;
const app = express();

//to connect to our database using config files route
const db = require('./config/mongoose');

//to parse incoming requests
app.use(express.urlencoded());

//to parse incoming request with JSON
app.use(express.json());

//to make connection to route index
app.use('/',require('./routes/index'))




// connecting to port
app.listen(port,function(err){
    if(err){
        console.log(`Error! connecting Port: ${err}`);
    }
    console.log(`Connected successfully to Port: ${port}`);
});