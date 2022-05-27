const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    product:
        [
            {meal:{
                type:String
            },
            price:{
                type:Number
            },
            quantity:{
                type:Number
            }}
        ]
    
})


