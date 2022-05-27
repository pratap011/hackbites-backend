

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User')
const auth = require('./routes/auth');
const inventory = require('./routes/inventory');
const userinfo = require('./routes/userinfo')
const port = process.env.PORT||4000
 mongoose.connect('mongodb+srv://Pratap11:QY6we3pEfj5uvlDe@cluster0.oejn7.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true 
}).then(()=>{
    console.log("Mongo connection successful!")
}).catch(()=>{
    console.log("Error in connecting to the database!")
})

app.use(express.json());
app.get("/viewusers",async (req,res)=>{
    const user = User.findOne({name:"Pratap Simha"},(err,userObj)=>{

        if(err){
            console.log("The error is-"+err)
        }
        else{
            console.log(userObj)
        }
        
    });
    
})

app.use("/auth", auth);
app.use("/details",userinfo);
app.use("/inventory",inventory);
app.post("/adduser",async (req,res)=>{
    const user = new User({
         name:"Pratap Simha",
         age:21
    })
    try{
         const successUser = await user.save();
         res.send("Success in adding the user!")  
    }
    catch(err){
        console.log("Error in adding new users!")
    }
})   


app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Server has started")
    }

})