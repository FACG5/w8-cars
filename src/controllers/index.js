const express = require('express');
const signup = require('./signup');

const router = express.Router();
const error = require('./error');

router.get('/signup',signup.get);
router.post('/signup',signup.post)
router.use(error.client);
router.use(error.server);

module.exports = router;
