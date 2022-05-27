const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        user:{
            type:String
        },
        orderPlacedDate:{
            type:Date
        },
        timeOfArrival:{
            type:Date
        },
        orderQuantity:{
            type:Number
        },
        orderType:{
            type:String
        }
    }
)