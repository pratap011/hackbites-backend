const mongoose =  require('mongoose');

const appointmentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId
    },
    doctor:{
        type:String
    },
    date:{
        type:Date
    }
})