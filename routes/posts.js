const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
} = require("../controllers/posts");
const firebaseUploader = require("../middlewares/upload");

router
  .route("/posts")
  .get(getAllPosts)
  .post(firebaseUploader.single("image"), createPost);

router
  .route("/posts/:id")
  .get(getSinglePost)
  .put(updatePost)
  .delete(deletePost);


module.exports = router;
