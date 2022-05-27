const auth = require('express').Router()
const User = require('../models/User');



auth.post('/register',async (req,res)=>{
    console.log("This is the register route!")
    console.log(req.body.name,req.body.email);
    if(req.body.email==undefined&&req.body.password==undefined){
        res.send("Please fill all the fields")
    }
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
                   console.log("Reached the register route 7:20");
                    const successUser = user.save();
                    res.sendStatus(200);
                    res.send("Success in adding the user!")  
               }
               catch(err){
                   console.log(err)
               }
            }
        }
    });
  
})

auth.post("/login",(req,res)=>{
    console.log("This is the login route 7:40");
    if(req.body.email==undefined&&req.body.password==undefined){
        res.send("Please fill all the fields")
    }

    const userLogin = User.findOne({email:req.body.email},(err,response)=>{
        if(err){
            console.log(err)
        }
        else{
            if(!response){
                res.sendStatus(401);
                res.send("There is no account with this email!");

            }
            else{
                if(req.body.password==response.password){
                    res.sendStatus(200);
                    res.send("You are successfully logged in.")
                }
                else{
                    res.sendStatus(401)
                    res.send("You have entered the wrong password.")
                }
            }
        }
    })


})
module.exports = auth;
