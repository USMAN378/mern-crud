const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
name : {
    type : String,
    required : true
},
desc : {
    type : String,
    required : true
},
createdAt : {
    type : Date,
    default : Date.now
}
,updatedAt : {
    type : Date,
    default : Date.now
}
});

module.exports = Books = mongoose.model('books',BookSchema);