const Post = require('../models/post');
const fetch = require('node-fetch');
const apiKey = process.env.GIPHY_KEY;
const searchURL = 'api.giphy.com/v1/gifs/search';

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


    // const search = req.query.search;
    // fetch(`${searchURL}?api_key=${apiKey}&q=${search}&limit=2`)
    // .then(res => res.json())
    // .then()
