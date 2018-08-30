const express = require('express');
const signup = require('./signup');
const homepage = require('./homepage');
const router = express.Router();
const error = require('./error');
const car = require('./car');

router.get('/',homepage.get);
router.get('/:car',car.get)
router.get('/signup',signup.get);
router.post('/signup',signup.post)
router.use(error.client);
router.use(error.server);

module.exports = router;
