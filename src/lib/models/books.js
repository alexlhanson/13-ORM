'use strict';

import mongoose from 'mongoose';
import Authors from './authors.js';
import { rejects } from 'assert';

const Schema = mongoose.Schema;

const bookSchema = Schema({
  title: { type: String, required: true },
  author: { type: String, require: true },
  genre: { type: String, require: true },
  personalRating: { type: Number, max: 5, min: 1, require: true },
  AuthorId: { type: Schema.Types.ObjectId, ref: 'Authors', required: true },
});

bookSchema.pre('save', function (next) {
  let bookId = this._id;
  let authorId = this.AuthorId;

  Authors.findById(authorId)
    .then(author => {
      if (!author) {
        return Promise.reject('Author not found for book');
      } else {
        Authors.findByIdAndUpdate(authorId,
          { $addToSet: { booksList: bookId } }
        )
          .then(Promise.resolve())
          .catch(err => Promise.reject(err));
      }
    })
    .then(next())
    .catch(next);
});

export default mongoose.model('Books', bookSchema);
