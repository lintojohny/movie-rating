const express = require('express');

const router = express.Router();
const {catchErrors} = require('../errorHandlers');
const {addMovie} = require('../controllers/movie/addMovieController');
const {getMovies} = require('../controllers/movie/getMovieController');
const {getMovieById} = require('../controllers/movie/getMovieByIdController');
const {auth} = require('../middleware/auth');
const addMovieValidator = require('../validators/addMovieValidator');

router.post('/addMovie', auth, addMovieValidator, catchErrors(addMovie));

router.get('/getMovies', auth, catchErrors(getMovies));
router.get('/getMovies/:movieId', auth, catchErrors(getMovieById));

module.exports = router;
