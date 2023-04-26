const express = require('express')

const clientRoutes = require('./modules/clients/infrastructure/clientRoutes')
const memberRoutes = require('./modules/members/infrastructure/memberRoutes')

const app = express()

app.use(express.json())

app.use('/client', clientRoutes)
app.use('/member', memberRoutes)

module.exports = app