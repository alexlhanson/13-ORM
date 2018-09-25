'use strict';

import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, require: true},
  genre: {type: String, require: true},
  personalRating: {type: Number, max: 5, min: 1, require:true},
});

export default mongoose.model('books', bookSchema);
