const {OK, BAD_REQUEST, METHOD_FAILURE} = require('http-status-codes');
const sanitize = require('mongo-sanitize');
const {success} = require('../../helpers/response');
const {ErrorHandler} = require('../../errorHandlers');
const {getAllCommentsByActivityId} = require('../../services/commentService');

async function getAllComments(req, res) {
  const {postId} = req.params;
  console.log('postId=================', postId);
  const allComments = await getAllCommentsByActivityId(postId);
  success(req, res, OK, allComments, 'Comment added success');
}

module.exports = {getAllComments};
