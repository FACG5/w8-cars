
const express = require("express");
const cookieParser = require('cookie-parser');

const signup = require("./signup");
const error = require("./error");
const login = require("./login");
const homepage = require('./homepage');
const car = require('./car');
const home = require("./home");
const ser = require("./ser");
const auth = require("./auth");
const logout = require("./logout");



const router = express.Router();

router.use(cookieParser())
router.get("/login", login.get);
router.get("/signup", signup.get);

router.post("/login", login.post);
router.post("/signup", signup.post);

router.get('/',homepage.get);
router.post('/ser',ser.post);
router.get('/logout', logout.signout);
router.get('/cars/:car',car.get);

router.use(auth.verify);
router.get("/home", home.get);
router.post("/home", home.post);


router.use(error.client);
router.use(error.server);

module.exports = router;
