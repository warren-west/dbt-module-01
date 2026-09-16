const sequelize = require('./models')

// Synchronize your instance of sequelize with the DB engine:
sequelize.sync({ /* alter: true, force: true */ })

const express = require('express')
const app = express()

app.use(express.json())

const indexRouter = require('./routes/index')
const healthRouter = require('./routes/health')
const carsRouter = require('./routes/cars')
const buyersRouter = require('./routes/buyers')

app.use('/', indexRouter)
app.use('/health', healthRouter)
app.use('/cars', carsRouter)
app.use('/buyers', buyersRouter)

module.exports = app
