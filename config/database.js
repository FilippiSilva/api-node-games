'use strict'

const env = process.env.NODE_ENV || 'development'
const knexfile = require('../knexfile')
const knex = require('knex')(knexfile[env])
const setupPaginator = require('knex-paginator')
setupPaginator(knex);

module.exports = knex