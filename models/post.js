const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    text: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String,
});

const postSchema = new Schema({
    title: String,
    about: String,
    history: String,
    imgUrl: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String,
    comments: [commentSchema]
});

module.exports = mongoose.model('Post', postSchema);