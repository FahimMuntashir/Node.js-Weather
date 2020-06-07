const express = require("express");
const https = require("https");

const app = express();


app.get("/", function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Bangladesh&units=metric&appid=304fa1cfd3e50e77d732349b3e590b58";

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){

           const dataParse= JSON.parse(data);

           const temp = dataParse.main.temp;
           console.log(temp);
           const temp2 = dataParse.weather[0].description;
           console.log(temp2);
           

           
        })
        

    });
    res.send("hello world");
});


app.listen(3000, function(req,res){
    console.log("Server is running on port; 3000");
});