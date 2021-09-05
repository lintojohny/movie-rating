const {OK, BAD_REQUEST, METHOD_FAILURE} = require('http-status-codes');
const sanitize = require('mongo-sanitize');
const {success} = require('../../helpers/response');
const {ErrorHandler} = require('../../errorHandlers');
const {addNewComment} = require('../../services/commentService');

async function addComment(req, res) {
  const commentData = new Comment(sanitize(req.body));
  console.log('commentData=================', commentData);
  const newComment = await addNewComment(commentData);
  success(req, res, OK, newComment, 'Comment added success');
}

module.exports = {addComment};
