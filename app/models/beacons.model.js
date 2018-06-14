'use strict'

const mongoose = require('mongoose');


const beaconSchema = mongoose.Schema({

    uniqueId: {
        type: String,
        require: [true, 'UniqueId is required']
    },
    name: {
        type: String,
        require: [true, 'Name is required']
    },
    description: {
        type: String
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item'
    }]

});


mongoose.model('beacon', beaconSchema);