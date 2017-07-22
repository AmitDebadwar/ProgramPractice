var express = require("express");
var app = express();
var path = require("path");
 
 

 

 
app.use(express.static('node_modules'));
app.use(express.static('views'));
 
app.use(express.static('assets'));
 


app.get('/', function (req, res) {
  res.sendFile('index.html', { "root": __dirname });
});




app.listen(3000,()=>{
  console.log("Dust is running on port 3000");
});

 