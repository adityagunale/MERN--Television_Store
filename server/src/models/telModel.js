const mongoose = require('mongoose');


const telSchema = mongoose.Schema({

    brand : {
        type : 'string',
    },

    model : {
        type : 'string',
    },

    price : {
        type : Number,
    }

})

const Television = new mongoose.model('Television', telSchema);
module.exports = Television