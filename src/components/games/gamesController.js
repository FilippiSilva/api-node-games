'use strict'
  
const { Game } = require('../../models')

const postGames = (req, res, next) => {
  const props = req.body.game

  Game.create(props)
    .then(game => res.json({
      ok: true,
      message: 'Game created',
      game
    }))
    .catch(next)
}

const getGames = (req, res, next) => {
  Game.findAll(req)
    .then(games => res.json({
      ok: true,
      message: 'Games found',
      games
    }))
    .catch(next)
}

const getGame = (req, res, next) => {
  const gameId = req.params.id

  Game.findById(gameId)
    .then(game => res.json({
      ok: true,
      message: 'Game found',
      game
    }))
    .catch(next)
}

const putGame = (req, res, next) => {
  const gameId = req.params.id
  const props = req.body.game

  Game.update(gameId, props)
    .then(game => res.json({
      ok: true,
      message: 'Game updated',
      game
    }))
    .catch(next)
}

const deleteGame = (req, res, next) => {
  const gameId = req.params.id

  Game.destroy(gameId)
    .then(deleteCount => res.json({
      ok: true,
      message: `Game '${ gameId }' deleted`,
      deleteCount
    }))
    .catch(next)
}

module.exports = {
  postGames,
  getGames,
  getGame,
  putGame,
  deleteGame
}