const express = require("express");
const signup = require("./signup");
const error = require("./error");
const login = require("./login");
const home = require("./home");


const router = express.Router();

router.get("/login", login.get);
router.get("/signup", signup.get);
router.get("/", home.get);

router.post("/login", login.post);
router.post("/signup", signup.post);

router.use(error.client);
router.use(error.server);

module.exports = router;
