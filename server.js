const express = require('express')
const bodyParser = require('body-parser')
require("dotenv").config();
const cors = require('cors')
const app = express()
const mongodb = require('mongodb')
const mongoclient = require('mongodb').MongoClient

const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const authRoutes1 = require("./routes/auth1");
const ownerRoutes = require("./routes/owner")


if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
 app.use(express.static('client/build'));
 app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname + '/client/build/index.html'));
 });
}

connection();

app.use(cors({origin:"http://localhost:3000"}))
app.use(express.json());
const menuRoute = require('./routes/foodroute')

app.use('/api/getmenu',menuRoute)
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/auth1", authRoutes1);
app.use("/api/owner", ownerRoutes);


app.get('/', (req, res) => {
  res.send('Server running 👍')
})

app.use(bodyParser.urlencoded({extended:true}));

app.post('/admin',(req,res,next)=>{
  const body = req.body
  let url = "mongodb://127.0.0.1:27017"
    mongoclient.connect(url,function(err,client){
    if(err) throw err 
    dbo = client.db("mydatabase")
    dbo.collection("WT_Project").insertOne(
    body,function(err){
      if(err) throw err
      console.log("one document inserted successfully")
      client.close()
    })})
  
})
app.post('/myorders',(req,res,next)=>{
  const body = req.body
  let url = "mongodb://127.0.0.1:27017"
    mongoclient.connect(url,async function(err,client){
    if(err) throw err 
    dbo = client.db("mydatabase")
    for(let i in body)
    {
      if(await dbo.collection("myorders").find(body[i]))
      {
        body[i]._id = mongodb.ObjectId()
      }
    }
    dbo.collection("myorders").insertMany(
    body,function(err){
      if(err) throw err
      console.log("Document inserted successfully")
      client.close()
      res.send("Done")
    })})
  
})
app.post('/cart',(req,res,next)=>{
  const body = req.body
  let url = "mongodb://127.0.0.1:27017"
    mongoclient.connect(url,function(err,client){
    if(err) throw err 
    dbo = client.db("mydatabase")
    dbo.collection("cartitems").insertOne(
    body,function(err){
      if(err) throw err
      console.log("one document inserted successfully")
      client.close()
    })})
  
})

app.get('/api/check/:id',(req,res,next)=>{
        console.log(req.params.id)
        url = "mongodb://127.0.0.1:27017"
        mongoclient.connect(url,async function(err,client){
            if(err) throw err
            dbo = client.db("mydatabase")
            const items = await dbo.collection("cartitems").find({name:req.params.id}).toArray()
            client.close()
            res.send(items)
          })
  
})

const port = process.env.PORT|| 8080
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 