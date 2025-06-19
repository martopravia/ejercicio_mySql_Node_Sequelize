// 17) requiero dotenv para que cargue sequelize con mis
// variables de entorno, sigo en User.js
require("dotenv").config();
// 6) configuramos la base de datos con sequelize (requiero sequelize)
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  // 7)creo nueva instancia de sequelize
  //en vez de tener dbQuery esto es mi equivalente en sequelize
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    port: process.env.DB_PORT, // Ej: 3306
    dialect: process.env.DB_CONNECTION, // Ej: mysql
  }
);

module.exports = { sequelize, Model, DataTypes };
// 8) exporto la instancia creada arriba con s minuscula,
// por medio de esta conexión hago las consultas
//Permite en mi modelo User.js llevarme todo desde acá.
//Puedo usarlo desde todos mis modelos ahora
//sigo en User.js
