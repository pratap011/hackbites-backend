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
    }
})

module.exports = mongoose.model('User',userSchema);