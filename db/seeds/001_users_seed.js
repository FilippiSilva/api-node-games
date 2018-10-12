'use strict'

const faker = require('faker');
const { User } = require('../../src/models')

exports.seed = (knex, Promise) => knex(User.tableName).del()
  .then(() => {
    let users = [
      {
        username: 'admin',
        password: 'admin',
        email: 'admin@email.com'
      },
      {
        username: 'user',
        password: 'user',
        email: 'user@email.com'
      }
    ]

    for(let i in [...Array(8)]) {
      const username = faker.internet.userName().toLowerCase()
      users.push({
        username: username,
        password: username,
        email: username + '@email.com'
      })
    }
    console.log('users ', users)
    return users
  })
  .then(newUsers => Promise.all(newUsers.map(user => User.create(user))))
  .catch(err => console.log('err: ', err))