const auth = require('express').Router()
const User = require('../models/User');



auth.post('/register',async (req,res)=>{
    console.log("This is the register route!")
    const userExists = User.findOne({email:req.body.email},(err,response)=>{
        if(err){
            console.log(err);}
        else{
            if(response){
                res.send("The email already exists")
            }
            else{
                const user = new User({
                    name:req.body.name,
                    age:req.body.age,
                    email:req.body.email,
                    password:req.body.password
               })
               try{
                    const successUser = user.save();
                    res.send("Success in adding the user!")  
               }
               catch(err){
                   console.log(err)
               }
            }
        }
    });
    console.log(userExists.email)
  
})

auth.post("/login",(req,res)=>{
    console.log("This is the login route");
    const userLogin = User.findOne({email:req.body.email},(err,response)=>{
        if(err){
            console.log(err)
        }
        else{
            if(!response){
                res.send("There is no account with this email!");

            }
            else{
                if(req.body.password==response.password){
                    res.send("You are successfully logged in.")
                }
                else{
                    res.send("You have entered the wrong password.")
                }
            }
        }
    })


})
module.exports = auth;
