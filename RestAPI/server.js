const express = require ('express')

const app = express();


app.listen(5500,()=>{
    console.log("server started")
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
}),
app.post('/',(req,res)=>{
    res.send("hello received post requested")
}),
app.put('/',(req,res)=>{
    res.send("hello received put requested")
}),
app.delete('/',(req,res)=>{
    res.send("hello received delete requested")
})


// const express = require ('express');

// const app = express();


// app.listen(4500,function(){
//     console.log("server started")
// })

// app.get('/',function(req,res){
//     if (req.query.city){
//         res.send('hello welcome to ${req.query.city}')
//     }
//     else{
//         res.send("hello")
//     }
// })