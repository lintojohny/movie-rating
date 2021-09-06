const express = require('express');

const router = express.Router();
const {userLogin} = require('../controllers/account/loginControllers');
const {registerUser} = require('../controllers/account/registerController');
const {userLogout} = require('../controllers/account/logoutController');
const {getUsers} = require('../controllers/account/getUsersController');
const signUpValidator = require('../validators/signupValidator');
const {catchErrors} = require('../errorHandlers');

router.post('/register', signUpValidator, catchErrors(registerUser));
router.post('/login', catchErrors(userLogin));
router.patch('/logout', catchErrors(userLogout));

router.get('/getUsers', catchErrors(getUsers));

module.exports = router;
