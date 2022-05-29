const express = require('express');
const Exercise=require('../models/Exercises');
const User = require('../models/User');
const exercise = express.Router();

exercise.post("/addexercise", (req,res)=>{
    const exerciseschema = new Exercise({
        bmi:req.body.bmi,
        title:req.body.title,
        info:req.body.info
    })
    try{
        const exerciseSuccess = exerciseschema.save();
        res.status(200).send("Exercise added")
    }
    catch{
        console.log("The exercise could not be saved.")
        res.status(501).send("Exercise could not be added.")
    }

})

exercise.get("/view",(req,res)=>{
    const userbmi = User.findOne({email:req.query.email},(err,result)=>{
        if(result.bmi>=18&&result.bmi<=25){
            const exercisesResult = Exercise.find({bmi:20},(err,result)=>{
                if(err){
                    console.log(err)
                    res.status(501).send("We are sorry, could not fetch exercises")
                }
                else{
                    res.send(result);
                }
        
            })
            
        }
        else if(result.bmi>25&&result.bmi<=30){
            const exercisesResult = Exercise.find({bmi:26},(err,result)=>{
                if(err){
                    console.log(err)
                    res.status(501).send("We are sorry, could not fetch exercises")
                }
                else{
                    res.send(result);
                }
        
            })
        }
        else{
            const exercisesResult = Exercise.find({bmi:31},(err,result)=>{
                if(err){
                    console.log(err)
                    res.status(501).send("We are sorry, could not fetch exercises")
                }
                else{
                    res.send(result);
                }
        
            })
        }
    })
    
})
module.exports = exercise;