const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const dietSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    plan:{
        type:String,
        required:true
    },
    pid:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    }

})

module.exports = mongoose.model("dietSchema",dietSchema);