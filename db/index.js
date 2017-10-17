const db = require('./connection')

const Comment = require('./Comment')
const Emoji = require('./Emoji')
const User = require('./User')

Comment.belongsTo(User)
Comment.belongsTo(Emoji)
Emoji.hasMany(Comment)
User.hasMany(Comment)

module.exports = {db, Comment, Emoji, User}

