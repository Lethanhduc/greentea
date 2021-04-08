const mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    staffID: String
} , { collection: 'account' } );

var account = mongoose.model('account', accountSchema);

module.exports = account;