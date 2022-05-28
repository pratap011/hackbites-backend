const express = require('express');
const Exercise=require('../models/Exercises');
const exercise = express.Router();

exercise.post("/addexercise", (req,res)=>{
    const exerciseschema = new Exercise({
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
    const exercisesResult = Exercise.find((err,result)=>{
        if(err){
            console.log(err)
            res.status(501).send("We are sorry, could not fetch exercises")
        }
        else{
            res.send(result);
        }

    })
})
module.exports = exercise;