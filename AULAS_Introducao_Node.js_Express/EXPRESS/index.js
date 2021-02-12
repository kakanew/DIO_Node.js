const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./EXPRESS/node_modules/routes/userRoute')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))

userRoute(app)

app.get('/', (req, res) => res.send('Hello World from Node.js Express!'))

app.listen(port, () => console.log('API rodando na porta ' + port))