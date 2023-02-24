const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};
const createPost = async (req, res) => {
  const {
    body: { title, description },
    file,
  } = req;

  try {
    const newPost = await Post.create({
      title,
      description,
      image: file.publicUrl,
    });

    res.status(201).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};
const getSinglePost = async (req, res) => {
  const { id } = req.params;
  try {
    const singlePost = await Post.findById(id);
    res.status(200).json(singlePost);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};
const updatePost = async (req, res) => {
  const { id } = req.params;
  const {
    body: { title, description },
    file,
  } = req;
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, description, image: file },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    res.status(200).send(`Post with id ${deletedPost._id} was deleted`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getSinglePost,
  updatePost,
  deletePost,
};
