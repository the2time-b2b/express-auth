const mongoose = require('mongoose');


const purchaseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 30
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
    bankDetails: {
        bankName: {
            type: String,
            required: true
        },
        accountType: {
            type: String,
            enum: ["savings", "current", "others"],
            
        },
        accountNumber: {
            type: Number,
            required: true
        },
        ifsc: {
            type: String,
            required: true
        }
    },
    delRec: {
        type: Boolean,
        default: false,
    },
    modified: {
        by: {
            type: String,
            required: true
        },
        at: {
            type: Date,
            default: Date.now,
            required:true
        }
    },
    activeStatus: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('Purchase', purchaseSchema);