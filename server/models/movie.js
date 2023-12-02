const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
  apiId: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  }
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;

