const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    info:{
        type:String,
        requried:true
    }
})

module.exports = mongoose.model("exerciseSchema",exerciseSchema);
