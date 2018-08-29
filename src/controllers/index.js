const express = require("express");

const router = express.Router();

const error = require("./error");
const login = require("./login");

router.get("/login", login.get);
router.post('/login',login.post);
router.use(error.client);
router.use(error.server);

module.exports = router;
