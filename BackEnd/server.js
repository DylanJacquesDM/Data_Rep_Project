const express = require('express')
const app = express()
const port = 4000
//Mongoose
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//config  to send file
app.use(express.static(path.join(__dirname, '/../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));



//cors function
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

const myConnectionString = "mongodb+srv://dylanjacques:ZqK6Cm$8@cluster0.f7xou.mongodb.net/shoes?retryWrites=true&w=majority";
mongoose.connect(myConnectionString, {useNewUrlParser: true, useNewUrlParser: true});

const Schema = mongoose.Schema;
var shoeSchema = new Schema({
    title:String,
    year:String,
    poster:String
});

var ShoeModel = mongoose.model("shoe", shoeSchema);



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/shoes', (req, res)=>{

ShoeModel.find((err, data)=>{
    res.json(data);

})

    // res.status(200).json({
    //     message: "Everything is working fine",
    //     shoes:myshoes});
})

// app.get('/api/shoes/:id', (req,res)=>{
//     console.log(req.params.id);

//     ShoeModel.findById(req.parmas.id, (err,data)=>{
//         res.json(data);

//when the conditions are met this function will used
//allows the use of body purser
app.get('/api/shoes/:id',(req,res)=>{
    console.log(req.params.id);
   // this find request will listen and return any shoe or data with the same id
    ShoeModel.findById(req.params.id, (err, data)=>{
      res.json(data);
    })
})

//delete method from http request
app.delete('/api/shoes/:id',(req,res)=>{
  console.log("Delete Shoe; "+req.params.id);

  //locates the record in the DB + returns data 
  ShoeModel.findByIdAndDelete(req.params.id,(err, data)=>{
      res.send(data);
  })
})


app.put('/api/shoes/:id', (req, res)=>{
    console.log("Update Shoe: "+req.params.id);
    console.log(req.body);
  
    ShoeModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
      (err,data)=>{
        res.send(data);
      })
  })


app.post('/api/shoes', (req, res)=>{
    console.log('shoe received');
    console.log(req.body.title);
    console.log(req.body.title);
    console.log(req.body.year);

    ShoeModel.create({
        title:req.body.title,
        year:req.body.year,
        poster:req.body.poster
    })
    res.send('Item Added');

})


app.get('*',(req,res)=>{
   res.sendFile(path.join(__dirname+'/../build/index.html'));
 })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})