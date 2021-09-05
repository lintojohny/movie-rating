const express = require('express');
const {auth} = require('../middleware/auth');
const {likeMovie} = require('../controllers/Like/likeMovieController');
const {disLikeMovie} = require('../controllers/Like/disLikeMovieController');
const {catchErrors} = require('../errorHandlers');
const {getLikesCount} = require('../controllers/Like/getLikesCountController');
const {
  getDisLikesCount,
} = require('../controllers/Like/getDisLikesCountController');

const router = express.Router();

router.post('/getLikesCount', auth, catchErrors(getLikesCount));

router.post('/getDislikesCount', auth, catchErrors(getDisLikesCount));

router.post('/upLike', auth, catchErrors(likeMovie));

router.post('/upDisLike', auth, catchErrors(disLikeMovie));

module.exports = router;
