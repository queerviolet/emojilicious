const {STRING} = require('sequelize')
const db = require('./connection')

module.exports = db.define('users', {
  name: STRING,
})