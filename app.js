const express = require("express");
const https = require("https");

const app = express();


app.get("/", function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Bangladesh&units=metric&appid=304fa1cfd3e50e77d732349b3e590b58";

    https.get(url, function(response){
        console.log(response);
        

    });
    res.send("hello world");
});


app.listen(3000, function(req,res){
    console.log("Server is running on port; 3000");
});