const express = require('express');
const Questions = require('../models/Forum');
const User = require('../models/User');
const forum = express.Router();

forum.post("/addquestion",(req,res)=>{
    const findUser = User.findOne({email:req.query.email},(err,response)=>{
        if(err){
            res.status(501).send("An error occured");

        }
        else{
            const addquestion = new Questions({
                user:response.name,
                question:req.body.question
            })
            try{
                const savequestion = addquestion.save();
                res.status(200).send("Question is added")

            }
            catch{
                res.status(501).send("An error occured.")
            }
        }
    })
})

forum.post("/addanswer",(req,res)=>{
        const newValue = {
            answeredUser:req.query.user,
            answer:req.body.answer,     
        }

        const addValues = {$push:{answers:[newValue]}}
        const addanswer = Questions.updateOne({_id:req.query.id},addValues,(err,result)=>{
            if(err){
                res.status(501).send("Some error has occured");
            }
            else{
                res.send("Your answer has been added")
            }
        })

    
})

forum.get("/getquestion",(req,res)=>{
    const getuser = User.findOne({email:req.query.email},(err,result)=>{
        const findquestion = Questions.find({user:result.name},(err,data)=>{
            if(err){
                res.status(501).send("An error has occured");
            }
            else{
                res.send(data)
            }
        })
    })
})

forum.get("/getallquestion",(req,res)=>{
    const getquestion = Questions.find((err,result)=>{
        if(err){
            res.status(501).send("An error has occured")
        }
        else{
            res.send(result)
        }
    })
})

module.exports = forum;
