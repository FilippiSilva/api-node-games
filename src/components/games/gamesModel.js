'use strict'

const createGuts = require('../../helpers/model_guts')

const name = 'Game'
const tableName = 'games'

// Properties that are allowed to be selected from the database for reading.
// (e.g., `password` is not included and thus cannot be selected)
const selectableProps = [
  'id',
  'name',
  'date',
  'company_developer_id',
  'company_publisher_id',
  'updated_at',
  'created_at'
]

module.exports = knex => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps
  })

  return {
    ...guts
  }
}