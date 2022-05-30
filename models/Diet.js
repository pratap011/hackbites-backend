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
    toEat:{type:Array}

})

module.export = mongoose.model("dietSchema",dietSchema);