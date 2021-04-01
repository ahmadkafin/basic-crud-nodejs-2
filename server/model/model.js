const mongoose = require('mongoose');

//schema for mongoDB
var schema = new mongoose.Schema({
    name : {
        type : String,
        require: true,
    },
    email  : {
        type: String,
        required: true,
        unique: true
    },
    mobile : {
        type: Number,
        required: true
    },
    
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb;