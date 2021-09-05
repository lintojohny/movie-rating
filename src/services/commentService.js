const {Comment} = require('../dataSource/models/Comment');

function addNewComment(commentData) {
  return Comment(commentData).save({});
}

function getAllCommentsByActivityId(postId) {
  return Comment.find({postId}).populate('writer');
}

module.exports = {
  addNewComment,
  getAllCommentsByActivityId,
};
