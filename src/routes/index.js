const express = require('express');

const router = express.Router();
const healthRouter = require('./health');

const comments = require('./comment');
const favorates = require('./favorite');
const likes = require('./like');
const users = require('./users');

router.use('/health', healthRouter);

router.use('/comments', comments);
router.use('/favorates', favorates);
router.use('/likes', likes);
router.use('/users', users);

module.exports = router;
