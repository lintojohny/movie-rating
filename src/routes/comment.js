const express = require('express');

const router = express.Router();
const {catchErrors} = require('../errorHandlers');
const {addComment} = require('../controllers/comment/addCommentController');
const {getComments} = require('../controllers/comment/getCommentController');

router.post('/addComment', catchErrors(addComment));

router.get('/getComments/:postId', catchErrors(getComments));

module.exports = router;
