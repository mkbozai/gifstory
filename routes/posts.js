var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts');
const isLoggedIn = require('../config/auth');

// All routes start with /posts (from server.js)

router.get('/', postsCtrl.index);
router.get('/new', isLoggedIn, postsCtrl.new);
router.get('/:id', postsCtrl.show);
router.post('/', postsCtrl.create);
router.get('/:id/edit', isLoggedIn, postsCtrl.edit);
router.put('/:id', postsCtrl.update);
router.delete('/:id', isLoggedIn, postsCtrl.delete);

module.exports = router;
