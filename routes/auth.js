const auth = require('express').Router()
const User = require('../models/User');




auth.post('/register', async (req, res) => {
    console.log("This is the register route!")
    var val = Math.floor(1000 + Math.random() * 9000);
    console.log(req.body.name,req.body.email);
    if(req.body.email==undefined&&req.body.password==undefined){
        res.send("Please fill all the fields")
    }
    const userExists = User.findOne({email:req.body.email},(err,response)=>{
        if(err){
            console.log(err);}
        else{
            if(response){
                res.sendStatus(409);
                res.send("The email already exists")
            }
            else {
                const user = new User({
                    name:req.body.name,
                    age:req.body.age,
                    email:req.body.email,
                    password:req.body.password,
                    pid:val
               })
               try{
                   console.log("Reached the register route 7:20");
                    const successUser = user.save();
                    res.status(200).send("You are now registered!")
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
                

            }
            else{
                if(req.body.password==response.password){
                    res.status(200).send("Logged in");
                
                }
                else{
                    res.sendStatus(401)
                
                }
            }
        }
    })


})
module.exports = auth;
