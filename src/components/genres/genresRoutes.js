'use strict'

const router = require('express').Router()
const {
  postGenres,
  getGenres,
  getGenre,
  putGenre,
  deleteGenre
} = require('./genresController')

router.route('/genres')
  .post(postGenres)
  .get(getGenres)

router.route('/genres/:id')
  .get(getGenre)
  .put(putGenre)
  .delete(deleteGenre)

module.exports = router