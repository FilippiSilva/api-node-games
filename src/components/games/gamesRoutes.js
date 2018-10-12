'use strict'

const router = require('express').Router()
const {
  postGames,
  getGames,
  getGame,
  putGame,
  deleteGame
} = require('./gamesController')

router.route('/games')
  .post(postGames)
  .get(getGames)

router.route('/games/:id')
  .get(getGame)
  .put(putGame)
  .delete(deleteGame)

module.exports = router