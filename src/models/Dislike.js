const mongoose = require('mongoose');

const {Schema} = mongoose;

const dislikeSchema = mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    commentId: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
    movieId: {
      type: Schema.Types.ObjectId,
      ref: 'Movie',
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

const Dislike = mongoose.model('Dislike', dislikeSchema);

module.exports = {Dislike};
