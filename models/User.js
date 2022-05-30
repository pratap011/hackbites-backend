const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pid:{
        type:Number,
        required:true
    },
    goodies:{
        type:Number,
        default:0
    },
    waterIntake:{
        type:Number,
        default:0
    },
    subscribedDate:{
        type:Date,
        default:Date.now
    },
    bmi:{
        type:Number
    },
    daysSincePregnant:{
        type:Number
    },
    doctor:{
        type:String
    },
    partnerNumber:{
        type:Number
    },
    tracker:[{doctor:{type:String},date:{type:Date,default: Date.now()},week:{type:Number,default:0},size:{type:Number,default:0},weight:{type:Number,default:0},bp:{type:String, default:"-"},heart:{type:Number,default:0},temperature:{type:Number,default:0}}]
})

module.exports = mongoose.model('User',userSchema);