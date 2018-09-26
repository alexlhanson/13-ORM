'use strict';

import mongoose from 'mongoose';

const authorSchema = mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  numberOfBooks: {type: Number, required: true},
  booksList:[{type: mongoose.Schema.Types.ObjectId, refs: 'books'}], 
});

authorSchema.pre('findById', function(next){
  this.populate('bookList');
  next();
});

export default mongoose.model('authors', authorSchema);