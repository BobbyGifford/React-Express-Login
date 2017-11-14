const fs = require('fs')
const path = require('path')
const Sequlize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequlize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequlize = Sequlize

module.exports = db
