const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

const {
    createPost,
    getPosts,
} = require("../controllers/post.controllers");
router.post("/create", authMiddleware, createPost);

router.get("/all",authMiddleware, getPosts);
router.patch(`/edit/${id}`,authMiddleware, getPosts);

module.exports = router;