'use strict'

const moment = require('moment')
const { Game } = require('../../src/models')

exports.seed = (knex, Promise) => knex(Game.tableName).del()
  .then(() => [
    {
      name: 'God of War',
      date: moment('15/10/2018', 'DD/MM/YYYY').toDate(),
      company_developer_id: 1294, 
      company_publisher_id: 679
    },
    {
      name: 'Spider-Man',
      date: moment('07/09/2018', 'DD/MM/YYYY').toDate(),
      company_developer_id: 1095,
      company_publisher_id: 679
    },
    {
      name: 'Red Dead Redemption II',
      date: moment('26/10/2018', 'DD/MM/YYYY').toDate(),
      company_developer_id: 1275,
      company_publisher_id: 629
    },
    {
      name: 'Rocket League',
      date: moment('07/07/2015', 'DD/MM/YYYY').toDate(),
      company_developer_id: 1243,
      company_publisher_id: 583
    },
    {
      name: 'Mad Max',
      date: moment('04/09/2015', 'DD/MM/YYYY').toDate(),
      company_developer_id: 912,
      company_publisher_id: 821
    }
  ])
  .then(newGames => Promise.all(newGames.map(game => Game.create(game))))
  .catch(err => console.log('err: ', err))