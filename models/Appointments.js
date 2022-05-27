const mongoose =  require('mongoose');

const appointmentSchema = new mongoose.Schema({
    user:{
        type:String
    },
    doctor:{
        type:String
    },
    date:{
        type:Date
    }
})