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
    videoId: {
      type: String,
    },
  },
  {timestamps: true},
);

const Dislike = mongoose.model('Dislike', dislikeSchema);

module.exports = {Dislike};
