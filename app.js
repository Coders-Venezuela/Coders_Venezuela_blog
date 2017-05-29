const express = require('express') // se hace require de la libreria o modulo express
const bodyParser = require('body-parser') // se hace require de la libreria bodyParser
const app = express() // se guarda en una variable app la funcion de express

app.use(bodyParser.urlencoded({extended: false})) // llamada del middleware bodyParser que busca las rutas y las interpreta

app.use(bodyParser.json()) // para poder utilizar y leer objetos tipo json

app.set('view engine', 'pug') // definir como vistas a el motor "pug"

app.use(express.static('public')) // se hace statica la carpeta public

app.get('/', function (req, res) { // se hace una ruta sobre la raiz ('/') = localhost:3000
  res.render('index') // se manda a renderizar la vista que esta en el index.pug
})

module.exports = app // se crea el export con la palabra app

/*
  APIRESTFULL
  GET = Peticion para pedirle algo al servidor
  POST = Peticion para enviarle lo que sea al servidor
  PUT = Peticion para sobrescribir o editar cualquier informacion en el servidor
  DELETE = Peticion para borrar algo que este en el servidor
*/
/*
  codigos de estado
  200 = la respuesta son correctas y la peticion ha sido procesada correctamente
  300 = respuestas de redireccion el cliente necesita mas acciones para finalizar la Peticion
  400 = Errores por el cliente en el servidor
  500 = Errores por el servidor quiere decir que el servidor esta fallando
*/
