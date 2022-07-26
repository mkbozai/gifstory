var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts');

// All routes start with /posts (from server.js)

router.get('/', postsCtrl.index);
router.get('/new', postsCtrl.new);
router.post('/', postsCtrl.create);

module.exports = router;
