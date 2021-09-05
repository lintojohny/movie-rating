const express = require('express');

const router = express.Router();
const {catchErrors} = require('../errorHandlers');

const {addComment} = require('../controllers/comments/addCommentsController');
const {
  getAllComments,
} = require('../controllers/comments/getAllCommentsController');

router.post('/', catchErrors(addComment));
router.post('/:activityId', catchErrors(getAllComments));

module.exports = router;
