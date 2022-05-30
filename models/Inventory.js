const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    
        
            meal:{
                type:String
            },
            price:{
                type:Number
            },
            quantity:{
                type:Number
            },
            url:{
                type:String
            }
        
    
})


module.exports = mongoose.model('Inventory',inventorySchema);