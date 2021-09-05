const express = require('express');
const {auth} = require('../middleware/auth');
const {catchErrors} = require('../errorHandlers');
const {
  addToFavorite,
} = require('../controllers/favorite/addFavoriteController');

const {
  removeFromFavorite,
} = require('../controllers/favorite/removeFavoriteController');
const {
  getAllFavorite,
} = require('../controllers/favorite/getFavoritesController');

const {
  getFavoriteOrder,
} = require('../controllers/favorite/favoriteOrderController');

const {isFavorite} = require('../controllers/favorite/isFavoriteController');

const router = express.Router();

router.post('/favoriteOrder', auth, catchErrors(getFavoriteOrder));

router.post('/isFavorited', auth, catchErrors(isFavorite));

router.post('/addToFavorite', auth, catchErrors(addToFavorite));

router.post('/removeFavorite', auth, catchErrors(removeFromFavorite));

router.post('/getFavoredMovie', auth, catchErrors(getAllFavorite));
module.exports = router;
