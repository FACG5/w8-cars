
const express = require("express");
const signup = require("./signup");
const error = require("./error");
const login = require("./login");
const home = require("./home");
const homepage = require('./homepage');
const car = require('./car');


const router = express.Router();
router.get("/login", login.get);
router.get("/signup", signup.get);

router.get('/',homepage.get);
router.get('/:car',car.get)

router.post("/login", login.post);
router.post("/signup", signup.post);

router.use(error.client);
router.use(error.server);

module.exports = router;
