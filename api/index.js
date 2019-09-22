const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const placeController = require('./controllers/place')

const app = express()

const corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions))
app.use(helmet())

app.use('/places', placeController)

app.listen('3001', () => {
  console.log('API server started on 3001')
})
