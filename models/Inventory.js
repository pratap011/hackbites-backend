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
            }
        
    
})


module.exports = mongoose.model('Inventory',inventorySchema);