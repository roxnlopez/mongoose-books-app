//require
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema
var BookSchema = new Schema({
     title: String,
     author: String,
     image: String,
     releaseDate: String
 });	

//create model
var Book = mongoose.model('Book', BookSchema);

//export
module.exports = Book;