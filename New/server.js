const express = require("express")
const app = express();

app.get('/', function (req, res){
    res.send("Hello World");
})
app.get('/hi', function (req, res){
    res.send("Hello Im goutham");
})
app.listen(5500)