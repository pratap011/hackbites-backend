const express = require('express');
const User = require('../models/User');
const diet = express.Router();
const nodeCron=require('node-cron');
diet.get("/addgoodies",(req,res)=>{
    const finduser = User.findOneAndUpdate({email:req.query.email},{$inc:{goodies:2}},(err,result)=>{
        if(err){
            res.status(501).send("An error occured");
        }
        else{
            console.log(result.goodies)
            if(result.goodies>=20){
                console.log(result.goodies)
                const decuser = User.findOneAndUpdate({email:req.query.email},{$inc:{goodies:-20}},(err,data)=>{
                    if(err){
                        res.status(502).send("An error occured");
                    }
                    else{
                        res.status(200).send("You can now treat yourself! Have something from our secret desserts section!")
                    }
                })
            }
            else{
                res.status(200).send("Goodies is updated");
            }
    
        }
    })
})

diet.get("/start",(req,res)=>{
    const job =nodeCron.schedule("* * */23 * * *",()=>{
        const updateuser = User.findOneAndUpdate({email:req.query.email},{waterIntake:0},(err,response)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("Water intake updated to zero")
            }
        })
    })
})

diet.post("/updatewater",(req,res)=>{
    const updatewater = User.findOneAndUpdate({email:req.query.email},{$inc:{waterIntake:req.body.litre}},(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.status(200).send("Updated");
        }
    })
})

module.exports=diet;