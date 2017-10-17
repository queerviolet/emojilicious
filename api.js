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
        async (req, res, next) => {
    // Find or create a user
    const {name, text} = req.body
    const user = await User.findOrCreate({where: {name}})
                         .then(([user]) => user)
    const comment = await Comment.create({
      userId: user.id,
      emojiId: req.emoji.id,
      text,
    })
    res.send(comment)
  })
    
  .get('/emoji/:name/comments', (req, res, next) =>
    req.emoji.getComments()
      .then(comments => res.send(comments))
      .catch(next))
