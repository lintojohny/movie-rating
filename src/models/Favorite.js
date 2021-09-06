const mongoose = require('mongoose');

const {Schema} = mongoose;

const favoriteSchema = mongoose.Schema(
  {
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    movieId: {
      type: Schema.Types.ObjectId,
      ref: 'Movie',
    },
    movieTitle: {
      type: String,
    },
    moviePost: {
      type: String,
    },
    movieRunTime: {
      type: String,
    },
    status: {
      type: Number,
      required: true,
      enum: [0, 1],
      default: 1,
    },
  },
  {timestamps: true},
);

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = {Favorite};
