const fs=require('file-system');
const http=require('http');
const express= require('express');
const app=express();


const staticpath="/home/aman/Codes/webdev/seachweather";
app.use(express.static(staticpath));

app.get("/", (req,res)=>
{
    
    res.render(__dirname+"/index.html");
});

app.listen(8000,(req,res)=>
{
    
    console.log("listening port 8000");
});