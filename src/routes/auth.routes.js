const express = require("express");
const router = express.Router();
const {registerUserController, Login, CreatePost} = require("../controllers/auth.controllers");

router.post("/register",registerUserController);
router.post("/login",Login);
module.exports = router;