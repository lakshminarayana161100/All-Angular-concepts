const express = require ('express');
const {mkdirSync} = require('fs')
const app = express();


app.listen(4600,function(){
    console.log("server started")
})

app.get('/:city',function(req,res){
    if (req.params.city){
        res.send('hello welcome to ${req.params.city}')
    }
   // else{
   //     res.send("hello")
   // }
})