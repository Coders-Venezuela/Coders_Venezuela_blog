const express = require('express')

const app = express()

app.set('view engine', 'pug') // definir como vistas a el motor "pug"

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index')
})
app.listen(8080)
