'use strict'
  
const { Genre } = require('../../models')

const postGenres = (req, res, next) => {
  const props = req.body.genre

  Genre.create(props)
    .then(genre => res.json({
      ok: true,
      message: 'Genre created',
      genre
    }))
    .catch(next)
}

const getGenres = (req, res, next) => {
  Genre.findAll(req)
    .then(genres => res.json({
      ok: true,
      message: 'Genres found',
      genres
    }))
    .catch(next)
}

const getGenre = (req, res, next) => {
  const genreId = req.params.id

  Genre.findById(genreId)
    .then(genre => res.json({
      ok: true,
      message: 'Genre found',
      genre
    }))
    .catch(next)
}

const putGenre = (req, res, next) => {
  const genreId = req.params.id
  const props = req.body.genre

  Genre.update(genreId, props)
    .then(genre => res.json({
      ok: true,
      message: 'Genre updated',
      genre
    }))
    .catch(next)
}

const deleteGenre = (req, res, next) => {
  const genreId = req.params.id

  Genre.destroy(genreId)
    .then(deleteCount => res.json({
      ok: true,
      message: `Genre '${ genreId }' deleted`,
      deleteCount
    }))
    .catch(next)
}

module.exports = {
  postGenres,
  getGenres,
  getGenre,
  putGenre,
  deleteGenre
}