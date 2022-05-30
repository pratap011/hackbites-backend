const mongoose = require('mongoose');

const ForumSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    question:{
        type:String,
        required:true
    },
    dateOfQuestion:{
        type:Date,
        default:Date.now()
    },
    answers:[{answeredUser:{type:String},answer:String,dateOfAnswer:{type:Date,default:Date.now()}}]

})

module.exports = mongoose.model("ForumSchema",ForumSchema);