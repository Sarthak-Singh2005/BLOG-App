const Post = require("../models/post.model");
async function createPost(req,res){
    const {title, content} = req.body;
    const post = await Post.create({
        title,
        content,
        author: req.user.id,
    })
    res.json({
        message:"Post Created Successfully",
        post,
    })
}
async function getPosts(req, res) {
    const posts = await Post.find({author: req.user.id});
    res.json({
        posts,
    });
}
async function editPosts(req, res) {
    console.log(req.user._id);
    const posts = await Post.find({
        author: req.user.id,
    });
    res.json({
        posts,
    });
}
module.exports = { createPost,getPosts,editPosts };
