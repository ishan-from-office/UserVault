const express = require('express')

const cors = require('cors')
const UserModel = require('./model/Users')
const mongoose = require('mongoose')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://ishankoirala3:K4We9FoJOEsl2NLw@cluster1124.osd71.mongodb.net/crud")


app.post("/createUser",(req,res)=>{

    UserModel.create(req.body)
    .then(users=> res.json(users))
    .catch(err=>res.json(err))

})

app.get("/", async (req, res) => {
    try {
        const users = await UserModel.find(); // Fetch all users from the database
        res.status(200).json(users); // Send the user data as JSON
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

app.get('/getUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findById(id)
    .then(users=> res.json(users))
    .catch(err=>res.json(err))

})

app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate(id,
        {
            Name: req.body.Name,
            Email:req.body.Email, 
            Age: req.body.Age}
    )
    .then(users=> res.json(users))
    .catch(err=>res.json(err))
})

app.delete('/deleteUser/:id', (req, res) => {
    const { id } = req.params;
  
    UserModel.findByIdAndDelete(id)  // This deletes the user by ID
    .then(res=> res.json(users))
    .catch(err=>res.json(err))
  });

app.listen(3009, ()=>{
    console.log('hello world, the server is running')
    console.log('I repeat, the server is runningggg!!')
})