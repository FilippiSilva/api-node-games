'use strict'

const knex = require('../config/database')
const files = [
  './components/users/usersModel',
  './components/genres/genresModel',
  './components/companies/companiesModel'
]

let models = {} 
files.forEach(filename => {
  const initModel = require(filename)
  const model = initModel(knex)

  if (model) models[model.name] = model
}, {})

module.exports = models