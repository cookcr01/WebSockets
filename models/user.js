const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {type: String, unique:true},
    fullname: {type:String,unique:true,default:''},
    email: {type: String, unique:true},
    password: {type:String, unique: true, default: ' '},
    userImage: {type: String, default: 'default.png'},
    facebook: {type: String, default: ''},
    fbtokens: Array,
    google: {type: String, default: ''},
    googleTokens: Array



});


mondule.exports = mongoose.model('User', userSchema);