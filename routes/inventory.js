const express = require('express');
const inventory = express.Router();
const Inventory = require("../models/Inventory");

inventory.post("/additem",(req,res)=>{
    const inventoryProduct = new Inventory({
        meal:req.body.meal,
        price:req.body.price,
        quantity:req.body.quantity
    })
    try{
        const successInventory = inventoryProduct.save()
        res.sendStatus(200);
    }
    catch{
        res.sendStatus(500);
    }
})


inventory.get("/getlist",(req,res)=>{
    
    const viewInventory = Inventory.find((err,result)=>{
        if(err){
            console.log(err);

        }
        else{
            res.send(result);
        }
    })
})
module.exports = inventory;