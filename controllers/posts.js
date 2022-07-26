const Post = require('../models/post');

module.exports = {
    new: newPost,
    create,
    index,
};

function index(req,res) {
    Post.find({}, function(err, posts) {
        res.render('posts/index', { posts });
    });
};

function create(req, res) {
    Post.create(req.body, function(err) {
        if (err) return res.render('posts/new');
        res.redirect('/posts');
    });
};

function newPost(req, res) {
    res.render('posts/new');
};