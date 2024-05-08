const PostSchema = require("../models/post");

const getPosts = async (req, res) => {
  try {
    const posts = await PostSchema.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = await PostSchema.create(req.body);
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Post id not found" });
    }
    const updatedPost = await PostSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ msg: "Post id not found" });
    }
    await PostSchema.findByIdAndDelete(id);
    res.status(200).json({ msg: "Post deleted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { getPosts, createPost, updatePost, deletePost };
