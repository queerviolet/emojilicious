const {STRING} = require('sequelize')
const db = require('./connection')

module.exports = db.define('emojis', {
  description: STRING,
  name: STRING,
  emoji: STRING,
})