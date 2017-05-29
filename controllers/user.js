// donde se van a encontrar todas las funciones para el modelo usuario

'use strict'
const User = require('../models/user') // se manda a llamar a el modelo user.js
function signUp (req, res) { // se crea la funcion signUp que recibe un requerimiento y manda una respuesta
  console.log('POST /Users')
  console.log(req.body)
  const data = {
    username: req.body.username, // nombre de usuario con el que el se registrar
    password: req.body.password, //   contraseña con la cual el usuario se registrara
    email: req.body.email, // correo con el usuario se registro total mente obligario y tiene que ser unico
    birthdate: req.body.birthdate // fecha de nacimiento con el que el usuario se registro
  }
  const user = new User(data) // se guarda todos los datos almacenados en una constante y se manda a guardar esta constante
  user.save((err) => { // se manda a guardar el usuario en la base de datos
    if (err) return res.status(500).send({ message: `Error Create User: ${err}` }) // si paso algun error a mandar a guardar
    console.log('user created')
    console.log('Email :' + req.body.email)
    console.log('Password :' + req.body.password)
    return res.status(200) // manda el estatus 200 que fue correcto el guardado del usuario  guarda en la base de datos
  })
}
function getUsers (req, res) { // funcion para mostrar todos los usuarios en la base de datos
  User.find({}, (err, users) => { // el metodo find de mongoose es para recorrer la base de datos y traerse el objeto json completo
    if (err) return res.status(500).send({message: `Error 500 petition denegade: ${err}`}) // si se genera un error en la peticion se toma con un estatus 500 que no se puede terminar la peticion
    if (!users) return res.status(404).send({message: 'Not exists users'}) // si la variable que tiene el objeto users esta vacio manda un status 404 quiere decir que no encontro usuarios
    res.status(200).send({users: users})
  })
}
function getUser (req, res) { // funcion para mostrar todos los usuarios en la base de datos
  let userId = req.params.userId
  User.findById(userId, (err, user) => { // el metodo find de mongoose es para recorrer la base de datos y traerse el objeto json completo
    if (err) return res.status(500).send({message: `Error 500 petition denegade: ${err}`}) // si se genera un error en la peticion se toma con un estatus 500 que no se puede terminar la peticion
    if (!user) return res.status(404).send({message: 'Not exists users'}) // si la variable que tiene el objeto users esta vacio manda un status 404 quiere decir que no encontro usuarios
    res.status(200).send({user: user})
  })
}

function signIn (req, res) { // funcion para validar el logeado de los usuarios
  User.find({username: req.body.username, password: req.body.password}, (err, user) => { // se manda a buscar el correo en la base de datos
    if (err) return res.status(500).send({ message: err }) // si manda error 500 es que a pasado algo en la peticion
    if (!user) return res.status(404).send({ message: `No existe el usuario` })// si manda error 404 es que no existe este usuario
    res.status(200).send({message: `Bienvenido ${req.body.username}`, user: user}) // manda estado 200 y envia el mensaje que se a logeado correctamente
  })
}
module.exports =
{
  signUp, // palabra reservada para llamar a la funcion signUp
  signIn,
  getUsers, // palabra reservada para llamar a la funcion getUsers
  getUser
}
