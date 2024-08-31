const CommunityPost = require('../models/CommunityPost');

exports.createPost = async (req, res) => {
  const { userId, content } = req.body;

  try {
    const newPost = new CommunityPost({
      userId,
      content,
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await CommunityPost.find().sort({ timestamp: -1 }).populate('userId', 'name');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
