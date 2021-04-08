const mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    Price: String,
    Unit: String,
    Information: String,
    urlImg: String
} , { collection: 'product' } );

var Product = mongoose.model('product', productSchema);

module.exports = Product;