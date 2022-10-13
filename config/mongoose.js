//require the library
const mongoose = require('mongoose');

//adding environment requirement
require('dotenv').config();

//connecting to database

mongoose.connect(process.env.MONGODB_URI);

//aquiring connection
const db = mongoose.connection;

// on error
db.on('error',console.error.bind(console,'error connecting to db'));

//on success
db.once('open',function(){
    console.log('Successfully connected to the database')
})

//exporting db
module.exports=db;

