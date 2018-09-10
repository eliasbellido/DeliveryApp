const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const emyconnection = require('express-myconnection')
const mysql = require('mysql')

const app = express()

const restaurantRoutes = require('./routes/restaurant')

app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(emyconnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'admin@bellido',
  database: 'DeliveryApp'
}, 'single'))

app.use(cors())

app.use('/', restaurantRoutes)
require('./routes')(app)

app.listen(config.port, err => {
  if (!err) {
    console.log(`Server iniciado en el puerto ${config.port}`)
  } else {
    console.log('Error en conectar al puerto')
  }
})

// app.listen(config.port)
// console.log(`Server iniciado en el puerto ${config.port}`)
