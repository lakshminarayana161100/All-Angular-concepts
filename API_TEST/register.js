const mongoose = require('mongoose');

const RegisterForm = mongoose.Schema({
    firstname : {
        type:String,
        require:true,
    },
    lastname : {
        type:String,
        require:true,
    },
    emailaddress : {
        type:String,
        require:true,
    },
    mobilenumber : {
        type:String,
        require:true,
    },
    pasword : {
        type:String,
        require:true,
    },
    repeatpassword : {
        type:String,
        require:true,
    },
    data : {
        type :Date,
        default : Date.now
    }
})

module.exports = mongoose.model('firstname',RegisterForm)
