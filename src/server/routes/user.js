const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
// const users = require("../models/user");

// router.post("/users", users.users);
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
