const express = require("express");
const cookieParser = require('cookie-parser');

const signup = require("./signup");
const error = require("./error");
const login = require("./login");
const home = require("./home");
const auth = require("./auth");

const router = express.Router();

router.use(cookieParser())
router.get("/login", login.get);
router.post("/login", login.post);
router.get("/signup", signup.get);
router.post("/signup", signup.post);

router.use(auth.verify);
router.get("/home", home.get);
router.post("/home", home.post);

router.use(error.client);
router.use(error.server);

module.exports = router;
