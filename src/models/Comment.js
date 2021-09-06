const mongoose = require('mongoose');

const {Schema} = mongoose;

const commentSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    movieId: {
      type: Schema.Types.ObjectId,
      ref: 'Movie',
    },
    responseTo: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    content: {
      type: String,
    },
    date: {type: Date, default: Date.now},
    status: {
      type: Number,
      required: true,
      enum: [0, 1],
      default: 1,
    },
  },
  {timestamps: true},
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = {Comment};
