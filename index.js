var express = require('express');
var app =  express();

app.use(express.static('public'));


app.get('/',function(req,res){
    res.send('Hello World!');
});

var port  =  3000;

app.listen(port,()=>{
    console.log('Listening on port: ' + port);
});

