const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");

   
});
app.post("/" , function(req, res){
    
    const query = req.body.cityName;
const apikey ="304fa1cfd3e50e77d732349b3e590b58";
const unit = "metric"; 
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apikey ;

https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){

       const dataParse= JSON.parse(data);

       const temp = dataParse.main.temp;
       console.log( );
       const temp2 = dataParse.weather[0].description;
       console.log(temp2);
       const icon = dataParse.weather[0].icon;
       const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png "

       res.write("<h1>the temperature of " + query + " is " +temp + " degree celcius</h1>");
       res.write("<img src = "+ imageURL+">");
       res.send();

       
    })
    

});
})




app.listen(3000, function(req,res){
    console.log("Server is running on port; 3000");
});