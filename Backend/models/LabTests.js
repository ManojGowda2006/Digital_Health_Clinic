const mongoose = require('mongoose')

const labTests = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        requires: true
    }
});

module.exports = mongoose.model('LabTests', labTests);