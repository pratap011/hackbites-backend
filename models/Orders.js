const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        user:{
            type:String
        },
        orderPlacedDate:{
            type:Date
        },
        dateOfArrival:{
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