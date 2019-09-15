const express = require('express')
const cors = require('cors')
const placeController = require('./controllers/place')

const app = express()

const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))

app.use('/places', placeController)

app.listen('3001', () => {
  console.log('API server started on 3001')
})
