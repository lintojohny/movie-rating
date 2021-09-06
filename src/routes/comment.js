const express = require('express');

const router = express.Router();
const {catchErrors} = require('../errorHandlers');
const {addComment} = require('../controllers/comment/addCommentController');
const {getComments} = require('../controllers/comment/getCommentController');
const {auth} = require('../middleware/auth');

router.post('/addComment', auth, catchErrors(addComment));

router.get('/getComments/:movieId', auth, catchErrors(getComments));

module.exports = router;
