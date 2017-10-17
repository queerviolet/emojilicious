const {Emoji, Comment, User} = require('./db')

module.exports = require('express').Router()
  .param('name', (req, res, next) =>
    Emoji.findOne({where: {name: req.params.name}})
      .then(emoji => {
        req.emoji = emoji
        next()
      })
      .catch(next))
  
  .get('/emoji', (req, res, next) =>
    Emoji.findAll()
      .then(emoji => res.send(emoji))
      .catch(next))

  .get('/emoji/:name', (req, res, next) =>
      res.send(req.emoji))

  .post('/emoji/:name/comments',
        require('body-parser').json(),
        (req, res, next) => {
    // Find or create a user
    const {name, text} = req.body
    const user = User.findOrCreate({where: {name}})
      .then(([user]) => user)
      .then(user =>
        Comment.create({
          userId: user.id,
          emojiId: req.emoji.id,
          text,
        }))
      .then(c => res.send(c))
      .catch(next)
  })
    
  .get('/emoji/:name/comments', (req, res, next) =>
    req.emoji.getComments()
      .then(comments => res.send(comments))
      .catch(next))
