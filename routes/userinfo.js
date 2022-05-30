const express = require('express');
const userdetails = express.Router();
const User = require('../models/User');


userdetails.post("/", (req, res) => {
    var bmi = (req.body.weight / (req.body.height * req.body.height)) * 10000;
    bmi = Math.ceil(bmi)

    var newValues = { $set: { bmi: bmi, daysSincePregnant: req.body.pregnantDays } };
    const userinfo = User.updateOne({ email: req.query.email }, newValues, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send("User info is added to the database!")

        }
        })
})

userdetails.post("/addinfo",(req,res)=>{
    const newValues={
        week:req.body.week,
        size:req.body.size,
        weight:req.body.weight,
        bp:req.body.bp,
        heart:req.body.heart,
        temperature:req.body.temperature
    }
    const addvalue = {$push:{tracker:[newValues]}};
    const updatevals = User.updateOne({email:req.body.email},addvalue,(err,result)=>{
        if(err){
            res.status(501).send("An error occured in the server.Please try again later");
        }
        else{
            res.send("The user's tracker has been upgraded")
        }
    })
})



// get details of user
userdetails.get("/getInfo", (req, res) => {
    const userinfo = User.findOne({ email: req.query.email }, (err, response) => {
        if (err) {
            res.status(300).send(err)
        }
        else {
            res.send(response)
        }
    })
})
module.exports = userdetails;