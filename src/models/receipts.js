const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const newReceipt = new Schema({
        date: Date,
        receiptNumber: {type: String, unique: true},
        consumer: String,
        merchant: String,
        address1: String,
        address2: String,
        city: String,
        zipCode: Number,
        phone: Number,
        items: Array,
        taxAmount: Number,
        totalAmount: Number
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('addReceipts', newReceipt);