const express = require('express');
const Orders = require('../models/Orders');
const User = require('../models/User');
const orders = express.Router();

orders.post("/addorder",(req,res)=>{
    var d = new Date();
    d = new Date(d.setHours(d.getHours() + 2)).toLocaleTimeString();

    const finduser = User.findOne({email:req.query.email},(err,result)=>{
        const addorder = new Orders({
            user:result._id,
            orderPlacedDate:Date.now(),
            timeOfArrival:d,
            orderQuantity:req.body.quantity,
            orderType:req.body.id
        })
        try{
            const saveorder = addorder.save();
            res.status(200).send(`Your order will arrive by ${d}`);
        }
        catch{
            res.status(501).send("Something's wrong. Please try later.")
        }
    })
})


orders.get("/vieworder",(req,res)=>{
    const finduser = User.findOne({email:req.query.email},(err,result)=>{
        const myorder = Orders.find({user:result._id},(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.status(200).send(data);
            }
        })
    })
})
module.exports = orders;