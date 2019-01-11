const express = require("express");
const app = express();
const path = require('path');
// app la 1 router 
app.use(express.static('./static'));

// app.get("/", function(req, res) {
//     res.send("Hello World")
// })

app.get("/about", function(req, res){
    // res.send("<h1>Hoang Thanh Huyen</h1>");
    console.log(path.join(__dirname,"static", "index.html"));
    res.sendFile(path.join(__dirname,"static", "index.html"));
});

app.listen("8080", function(err){
    if(err) console.log(err)
    else console.log("Server start success 1!!!");
});