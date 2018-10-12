'use strict'

const router = require('express').Router()
const {
  postCompanies,
  getCompanies,
  getCompany,
  putCompany,
  deleteCompany
} = require('./companiesController')

router.route('/companies')
  .post(postCompanies)
  .get(getCompanies)

router.route('/companies/:id')
  .get(getCompany)
  .put(putCompany)
  .delete(deleteCompany)

module.exports = router