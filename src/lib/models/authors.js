'use strict';

import mongoose from 'mongoose';
import Books from './books.js';
const Schema = mongoose.Schema;

const authorSchema = Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  numberOfBooks: {type: Number, required: true},
  booksList:[{type: Schema.Types.ObjectId, refs: 'Books', required: true}], 
});

authorSchema.pre('findById', function(next){
  this.populate('bookList');
  next();
});

export default mongoose.model('Authors', authorSchema);