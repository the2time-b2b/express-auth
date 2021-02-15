const mongoose = require('mongoose');


const clientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    delRec: {
        type: Boolean,
        default: false,
    },
    gst: {
        type: String,
        required: true
    },
    pan: {
        type: String,
        required: true,
    },
    modified: {
        by: {
            type: String,
            required: true
        },
        at: {
            type: Date,
            default: Date.now,
            required: true
        }
    },
    deleteReason: {
        type: String,
    },
    billings: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'Billing'
        }
    ]
});


module.exports = mongoose.model('Client', clientSchema);