const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


const mongoose = require('mongoose');
 const video = require('../models/video')

mongoose.connect('mongodb+srv://lakshminarayana:narayana@cluster0.ewnrqzl.mongodb.net/?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then (
    () =>console.log('DB connected..... ')
).catch(err => console.log(err))


 //post method

router.post('/video', async (req,res)=>{                  //async means handling all delays
   
   console.log("upload successfull")
    const {title , url , description} = req.body ;
    
    try{
        const newData = new video({title,url,description});
       await newData.save();
        return res.json(result)

    }
    catch(err) {
        console.log(err.message);
    }
})
//video get
router.get('/videos',async (req,res)=>{
    try{
        const allData = await video.find();
        return res.json(allData);
    }
    catch(err) {
        console.log(err.message);
    }
}) 

router.post('/' , (req,res) => {

    const newVideo = new video({
        title: req.body.title
    })

    newVideo.save()
    .then(result => {
        res.status(201).json(result)
        console.log(result)
    })
    .catch(err => 
        {console.log(err)
            res.status(400).json({Error: err})
    })

    
})

module.exports=router;
