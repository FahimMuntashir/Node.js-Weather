const express = require("express");
const app = express();

app.get('/', function(req,res){
    res.send("hello world");
});


app.listen(3000, function(req,res){
    console.log("Server is running on port; 3000");
});