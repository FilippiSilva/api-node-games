'use strict'
  
const { Company } = require('../../models')

const postCompanies = (req, res, next) => {
  const props = req.body.company

  Company.create(props)
    .then(company => res.json({
      ok: true,
      message: 'Company created',
      company
    }))
    .catch(next)
}

const getCompanies = (req, res, next) => {
  Company.findAll(req)
    .then(companies => res.json({
      ok: true,
      message: 'Companies found',
      companies
    }))
    .catch(next)
}

const getCompany = (req, res, next) => {
  const companyId = req.params.id

  Company.findById(companyId)
    .then(company => res.json({
      ok: true,
      message: 'Company found',
      company
    }))
    .catch(next)
}

const putCompany = (req, res, next) => {
  const companyId = req.params.id
  const props = req.body.company

  Company.update(companyId, props)
    .then(company => res.json({
      ok: true,
      message: 'Company updated',
      company
    }))
    .catch(next)
}

const deleteCompany = (req, res, next) => {
  const companyId = req.params.id

  Company.destroy(companyId)
    .then(deleteCount => res.json({
      ok: true,
      message: `Company '${ companyId }' deleted`,
      deleteCount
    }))
    .catch(next)
}

module.exports = {
  postCompanies,
  getCompanies,
  getCompany,
  putCompany,
  deleteCompany
}