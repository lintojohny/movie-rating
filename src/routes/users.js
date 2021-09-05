const express = require('express');

const router = express.Router();
const {userLogin} = require('../controllers/loginControllers');
const {registerUser} = require('../controllers/registerController');
const {userLogout} = require('../controllers/logoutController');
const {getUsers} = require('../controllers/getUsersController');

const {catchErrors} = require('../errorHandlers');

router.post('/register', catchErrors(registerUser));
router.post('/login', catchErrors(userLogin));
router.patch('/logout', catchErrors(userLogout));

router.get('/getUsers', catchErrors(getUsers));

module.exports = router;
