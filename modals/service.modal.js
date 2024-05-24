const mongoose = require('mongoose')

const ServiceSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    breast : {
        type : Number,
        required : true 
    },
    height : {
        type : Number,
        required : true
    },
    weight : {
        type : Number,
        required : true
    },
    hip : {
        type : Number,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    typeofgirl : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    heading : {
        type : String,
        required : true
    },
    about : {
        type : String,
        required : true
    },
    service : [
        {
            type : String,
            required : true
        }
    ]

})

const Service = mongoose.model('Service',ServiceSchema)

module.exports = Service