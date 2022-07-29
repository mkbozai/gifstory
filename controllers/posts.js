const Post = require('../models/post');
const fetch = require('node-fetch');
const apiKey = process.env.GIPHY_KEY;
const searchURL = 'api.giphy.com/v1/gifs/search';

module.exports = {
    new: newPost,
    create,
    index,
    show,
    edit,
    update,
    delete: deletePost,
};

function newPost(req, res) {
    res.render('posts/new', {title: 'Create Post'});
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

function index(req,res) {
    Post.find({}, function(err, posts) {
        res.render('posts/index', { title: 'All Posts', posts });
    });
};

function show(req, res) {
    Post.findById(req.params.id)
    .exec(function(err, post) {
        res.render('posts/show', { title: 'Details', post });
    });
};

function edit(req, res) {
    Post.findOne({_id: req.params.id, user: req.user}, function(err, post) {
        res.render('posts/edit', {title: 'Edit Post', post})
    });
};

function update(req, res) {
    Post.findOneAndUpdate({_id: req.params.id, user: req.user},
        req.body,
        {new: true},
         function(err, post) {
            if (err || !post) return res.redirect('/posts');
            res.redirect(`/posts/${post._id}`);
         }
    );
};

function deletePost(req, res) {
    Post.findOneAndDelete({_id: req.params.id, user: req.user}, function(err) {
            res.redirect('/posts');
        }
    );
};