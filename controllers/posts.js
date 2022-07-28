const Post = require('../models/post');
const fetch = require('node-fetch');
const apiKey = process.env.GIPHY_KEY;
const searchURL = 'api.giphy.com/v1/gifs/search';

module.exports = {
    new: newPost,
    create,
    index,
    show,
    delete: deletePost,
    edit
};

function edit(req, res) {
    req.body.user = req.user._id;
    Post.findOne({_id: req.params.id, }, function(err, post) {
        res.render('posts/edit', {post})
    });
};

function deletePost(req, res) {
    req.body.user = req.user._id;
    Post.findOneAndDelete({}, function(err) {
            res.redirect('/posts');
        }
    );
};

function show(req, res) {
    Post.findById(req.params.id)
    .exec(function(err, post) {
        res.render('posts/show', { post });
    });
};

function index(req,res) {
    Post.find({}, function(err, posts) {
        res.render('posts/index', { posts });
    });
};

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    Post.create(req.body, function(err) {
        if (err) return res.render('posts/new');
        res.redirect('/posts');
    });
};

function newPost(req, res) {
    res.render('posts/new');
};
