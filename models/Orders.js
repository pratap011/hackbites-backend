const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Types.ObjectId,
            required:true
        },
        orderPlacedDate:{
            type:Date,
            required:true
        },
        timeOfArrival:{
            type:String,
            required:true
        },
        orderQuantity:{
            type:Number,
            required:true
        },
        orderType:{
            type:mongoose.Types.ObjectId,
            required:true
        }
    }
)

module.exports = mongoose.model("Orders",orderSchema);