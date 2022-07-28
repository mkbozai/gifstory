var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts');
const isLoggedIn = require('../config/auth');

// All routes start with /posts (from server.js)

router.get('/', postsCtrl.index);
router.get('/new', postsCtrl.new);
router.get('/:id', postsCtrl.show);
router.post('/', postsCtrl.create);
router.delete('/:id', postsCtrl.delete);

module.exports = router;
