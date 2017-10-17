const {TEXT} = require('sequelize')
const db = require('./connection')

module.exports = db.define('comments', {
  text: TEXT,
})