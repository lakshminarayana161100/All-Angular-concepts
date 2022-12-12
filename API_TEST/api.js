const express = require('express');
const mongoose = require('mongoose');    // import the moongoose

const BrandName = require('./model');  // import the model
const RegisterForm = require('./register');

const Address = require('./address');

const multer = require ('multer')
const ImageModel = require ('./image.model');


const video = require('./video');
const imageModel = require('./image.model');

const app = express();

app.use(express.json())   // this is middle varr.. or bodypass are also

app.listen(3000,()=>{
    console.log("server started at port 3000")
})

mongoose.connect('mongodb+srv://lakshminarayana:narayana@cluster0.ewnrqzl.mongodb.net/?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then (
    () =>console.log('DB connected..... ')
).catch(err => console.log(err))


//  app.get('/',(req,res)=>{
//          res.send("<h1>Hello World!!!</h1>")
//  })

// post method
app.post('/addbrands', async (req,res)=>{                  //async means handling all delays
    const {brandname} = req.body ;
    try{
        const newData = new BrandName({brandname});
       await newData.save();
        return res.status(201).json(newData)

    }
    catch(err) {
        console.log(err.message);
    }
})
// get mothod
app.get('/getallbrands',async (req,res)=>{
    try{
        const allData = await BrandName.find();
        return res.json(allData);
    }
    catch(err) {
        console.log(err.message);
    }
})

// path method

app.get('/getallbrands/:id',async (req,res)=>{
    try {
        const Data =await BrandName.findById(req.params.id)
        return res.json(Data);
    }
    catch(err){
        console.log(err.message);
    }
})


// delete request

app.delete('/deletebrand/:id',async(req,res)=>{
    try{
        await BrandName.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: 'Delete method has been called'
        })
       // return res.json (await BrandName.find())
    }
    catch {
        console.log(err.message)
    }
})


app.post('/adddetails', async (req,res)=>{                  //async means handling all delays
    const {firstname} = req.body ;
    const {lastname} = req.body ;
    const {emailaddress} = req.body ;
    const {password} = req.body ;
    const {repeatpassword} = req.body ;
    const {mobilenumber} = req.body ;
    
    try{
        const newData = new RegisterForm({firstname,lastname,emailaddress,password,repeatpassword,mobilenumber});
       await newData.save();
        return res.json(await RegisterForm.find())

    }
    catch(err) {
        console.log(err.message);
    }
})


//storage 
const Storage = multer.diskStorage ({
    destination: "uploads",
    filename:(req,file,cb) =>{
        cb(null,file.originalname);
    },
});

// multer storage
const upload = multer({
    storage:Storage
}).single('testImage')

//image post method

app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage = new ImageModel ({
                name:req.body.name,
                description:req.body.description,
                category:req.body.category,
                price:req.body.price,
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
            })
            newImage.save()
            .then(()=>res.send(
                
                'successfully uploaded'))
            .catch((err)=>console.log(err));
        }
    })
})
// get product method
app.get('/products', async (req,res) =>{ 
    try{  
    
         
        const products = await imageModel.find({})  // async makes a function return a Promise
                                                 //await makes a function wait for a Promise
        res.status(200).json({
            //Totalproducts : products.length,   // length of the products in schema
            all:products
        })
    }catch (error) {
        res.status(400).send(error)
    }
    })


//post method

app.post('/video', async (req,res)=>{                  //async means handling all delays
    const {title} = req.body ;
    const {url} = req.body ;
    const {description} = req.body ;
    try{
        const newData = new video({title,url,description});
       await newData.save();
        return res.json(await videoSchema.find())

    }
    catch(err) {
        console.log(err.message);
    }
})
//video get
app.get('/videos',async (req,res)=>{
    try{
        const allData = await video.find();
        return res.json(allData);
    }
    catch(err) {
        console.log(err.message);
    }
})


//add address post

app.post('/addaddress', async (req,res)=>{                  //async means handling all delays
    const {fullname} = req.body ;
    const {phonenumber} = req.body ;
    const {pincode} = req.body ;
    const {city} = req.body ;
    const {state} = req.body ;
    const {type} = req.body ;
    const {houseno} = req.body ;
    const {area} = req.body ;
    const {addalternativephonenumber} = req.body ;
    try{
        const newData = new Address({fullname,phonenumber,pincode,city,state,type,houseno,area,addalternativephonenumber});
       await newData.save();
        return res.json(await Address.find())

    }
    catch(err) {
        console.log(err.message);
    }
})