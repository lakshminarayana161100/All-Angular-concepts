const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    }
})


module.exports = mongoose.model('imageModel', ImageSchema)