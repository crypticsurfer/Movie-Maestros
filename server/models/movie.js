const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const movieSchema = new Schema({
  apiId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
  // comments: [
  //   {
  //     commentText: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 280,
  //     },
  //     commentAuthor: {
  //       type: String,
  //       required: true,
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  //],
});

const Movie = model('title', movieSchema);

module.exports = Movie;

