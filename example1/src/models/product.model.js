const mongoose = require('mongoose');
const { registerSchema } = require('swaggiffy');

const productSchema = mongoose.Schema({
    name: {
        type: String,        
        required: true
    },
    category: {
        type: String,        
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    registeredAt: {
        type: Date,
        required: true
    },
    isInStock: {
        type: Boolean,
        required: true
    }
});

registerSchema('Product', productSchema, {orm: 'mongoose'});

const Product = mongoose.model('Product', productSchema);


module.exports = { Product }