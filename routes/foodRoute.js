const express = require('express')
const mongoclient = require('mongodb').MongoClient
const router = express.Router();

router.get("/getallitems",async(req,res)=>{
    try {
        url = "mongodb://127.0.0.1:27017"
        mongoclient.connect(url,async function(err,client){
            if(err) throw err
            dbo = client.db("mydatabase")
            const items = await dbo.collection("WT_Project").find({}).toArray() 
            // console.log(items)
            client.close()
            res.send(items)
    })
    }catch(error)
    {
        return res.status(400).json({message:error.toString()});
    }
})
router.get("/getorders",async(req,res)=>{
    try {
        url = "mongodb://127.0.0.1:27017"
        mongoclient.connect(url,async function(err,client){
            if(err) throw err
            dbo = client.db("mydatabase")
            const items = await dbo.collection("myorders").find({}).toArray() 
            // console.log(items)
            client.close()
            res.send(items)
    })
    }catch(error)
    {
        return res.status(400).json({message:error.toString()});
    }
})
router.get("/getcartitems",async(req,res)=>{
    try {
        url = "mongodb://127.0.0.1:27017"
        mongoclient.connect(url,async function(err,client){
            if(err) throw err
            dbo = client.db("mydatabase")
            const items = await dbo.collection("cartitems").find({}).toArray() 
            // console.log(items)
            client.close()
            res.send(items)
    })
    }catch(error)
    {
        return res.status(400).json({message:error.toString()});
    }
})

router.get("/deletemenuitems/:id",async(req,res)=>{
    try {
        url = "mongodb://127.0.0.1:27017"
        mongoclient.connect(url,async function(err,client){
            if(err) throw err
            dbo = client.db("mydatabase")
            await dbo.collection("WT_Project").remove({name:req.params.id},async function(err,obj){
                res.send(obj)
            })
    })
    }catch(error)
    {
        return res.status(400).json({message:error.toString()});
    }
})
router.get("/deletecartitems/:id",async(req,res)=>{
    try {
        url = "mongodb://127.0.0.1:27017"
        mongoclient.connect(url,async function(err,client){
            if(err) throw err
            dbo = client.db("mydatabase")
            await dbo.collection("cartitems").remove({name:req.params.id},async function(err,obj){
                res.send(obj)
            })
    })
    }catch(error)
    {
        return res.status(400).json({message:error.toString()});
    }
})


router.get("/deletecart",async(req,res)=>{
    try {
        url = "mongodb://127.0.0.1:27017"
        mongoclient.connect(url,async function(err,client){
            if(err) throw err
            dbo = client.db("mydatabase")
            const items = await dbo.collection("cartitems").find({})
            console.log(items.data)
            await dbo.collection("cartitems").drop(function(err, delOK) {
            if (err) throw err;
            if (delOK) 
            console.log("Collection deleted");
            client.close()})
            res.send("Done")
    })
    }catch(error)
    {
        return res.status(400).json({message:error.toString()});
    }
})


module.exports = router