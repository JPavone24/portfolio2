const express = require('express')
const path = require('path')

const app = express()
const port = process.env.port || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,  './public/homepage.html'));
});

app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname,  './public/portfolio.html'));
});



app.listen(port, function(){
    console.log("Express server listening on  port: " + port);
  });

  