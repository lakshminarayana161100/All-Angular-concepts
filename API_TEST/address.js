const mongoose = require('mongoose');

const Address = mongoose.Schema({
    fullnmae : {
        type:String,
        require:true,
    },
    phonenumber : {
        type:String,
        require:true,
    },
    pincode : {
        type:String,
        require:true,
    },
    type : {
        type:String,
        require:true,
    },
    state : {
        type:String,
        require:true,
    },
        city : {
        type:String,
        require:true,
    },
    houseno : {
        type:String,
        require:true,
    },
     area  : {
        type:String,
        require:true,
    },
    data : {
        type :Date,
        default : Date.now
    }
})

module.exports = mongoose.model('address',Address)