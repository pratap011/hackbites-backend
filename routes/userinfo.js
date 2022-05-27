const express = require('express');
const userdetails= express.Router();
const User = require('../models/User');


userdetails.post("/",(req,res)=>{
    var bmi = (req.body.weight/(req.body.height*req.body.height))*10000;
    bmi = Math.ceil(bmi)
    var newValues = {$set:{bmi:bmi,daysSincePregnant:req.body.pregnantDays,partnerNumber:req.body.partnerNumber,doctor:req.body.doctor}};
    const userinfo = User.updateOne({email:req.query.email},newValues,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("User info is added to the database!")
        }
    })
})

module.exports = userdetails