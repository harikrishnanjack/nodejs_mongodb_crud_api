const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

var app=express();
var db=require('./config/db').database;

mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
    console.log("connected successfully");
}).catch((err)=>{
    console.log("unable to connect",err);
});
const port=process.env.PORT||5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const PostRoutes=require('./routes/apis/post');
app.use('/api/posts',PostRoutes)
app.listen(port,()=>{
    console.log("connected to the port",port);
})

