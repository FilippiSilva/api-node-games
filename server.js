'use strict'

const express = require('express')
const paginate = require('express-paginate')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

const app = express()

app.use(paginate.middleware(10, 100))
app.use(bodyParser.json())
app.disable('x-powered-by')

app.use('/', [
  // require('./routes/auth_routes'),
  require('./src/components/users/usersRoutes'),
  require('./src/components/genres/genresRoutes'),
  require('./src/components/companies/companiesRoutes'),
  require('./src/components/games/gamesRoutes'),
  // require('./routes/project_routes')
])

app.use(require('./src/middleware/error_middleware').all)

app.listen(PORT, () => {
  console.log(`Server started on port ${ PORT }`)
}).on('error', err => {
  console.log('ERROR: ', err)
})