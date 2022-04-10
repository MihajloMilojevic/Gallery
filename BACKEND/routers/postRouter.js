const express = require("express");
const {createPost, getPosts} = require("../controllers/postController");

const router = express.Router();

router.route("/").get(getPosts).post(createPost)
module.exports = router;