const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    bmi:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    info:{
        type:String,
        requried:true
    },
    link:{
        type:String
    }
})

module.exports = mongoose.model("exerciseSchema",exerciseSchema);
