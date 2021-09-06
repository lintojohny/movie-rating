const mongoose = require('mongoose');

const {ObjectId} = mongoose.Types;

const movieSchema = mongoose.Schema(
  {
    adult: {type: Boolean, default: false},
    genreIds: {type: Number, required: false},
    originalLanguage: {type: String, required: true},
    originalTitle: {type: String, required: true},
    overview: {type: String, required: true},
    popularity: {type: Number, default: null},
    posterPath: {type: String, required: false},
    releaseDate: {type: Number, required: true},
    title: {type: String, required: true},
    video: {type: Boolean, default: false},
    voteAverage: {type: Number, required: false},
    voteCount: {type: Number, required: false},
    writer: {type: ObjectId, ref: 'User'},
    status: {
      type: Number,
      required: true,
      enum: [0, 1],
      default: 1,
    },
  },
  {timestamps: true},
);

const Movies = mongoose.model('Movies', movieSchema);

module.exports = {Movies};
