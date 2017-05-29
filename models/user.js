'use strict'
const mongoose = require('mongoose') // se hace el require de mongoose
const Schema = mongoose.Schema  // se llama schema de mongoose

const UserSchema = new Schema({ // se inicializa el esquema que usuara el objeto en la base de datos
  username: {type: 'String', required: 'Username is obligatory', maxlength: [10, 'Your username is extensive'], minlength: [3, 'Your username is short']}, // nombre de usuario con el que el se registrar
  password: {type: 'String', required: 'Password is obligatory', minlength: [7, 'Password must be greater than 7 characters']}, //   contraseña con la cual el usuario se registrara
  birthdate: { type: Date, required: 'birthdate is obligatory' }, // Fecha de nacimiento del usuario es obligatoria
  email: { type: 'String', unique: true, lowercase: true, required: 'Email is obligatory' }, // correo con el usuario se registro total mente obligario y tiene que ser unico
  permision_level: {type: Number, default: 1}, // Crea un nivel de permiso al usuario para saber asi cuanto es el poder que tiene este en la app
  singUpDate: {type: Date, default: Date.now()} // el dia que se unio al sistema
})

module.exports = mongoose.model('User', UserSchema)// crea un export para el modelo con User y su esquema a la base de datos
