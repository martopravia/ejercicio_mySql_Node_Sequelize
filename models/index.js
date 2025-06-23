// 48) ahora todo se hace aca, establece la conexion a la base de datos
// abajo inicializa los modelos (Ej: const User=) y podemos definir las
// relaciones entre las entidades, ya que tenemos las variables
// de todos los modelos inicializados y queda todo centralizado
// por eso se trabaja con clases (init) dentro de mi modelo, se
// aprovecha ese modelo estatico para inicializar User
// ahora debo de hacer mi userRoutes con get,
// y definir mi userController con las rutas, voy a userRoutes

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
//51) rquiero article, y el initModel, exporto article, voy a articleCOntroller..
// 45)llamo a User
const User = require("./user"); // 45) permite que tenga mi initModel por clase
// (LO REQUIERO)
const Article = require("./article"); // (LO REQUIERO)

User.initModel(sequelize); //45) al tener mis modelos centralizados (LO INICIALIZO)
// en un unico archivo, puedo hacer las relaciones aca
Article.initModel(sequelize); //  (LO INICIALIZO)

// 59) agrego las relaciones, corro node seeders/runAllSeeders.js para las
// relaciones sigo en articleSeed... (esto hace que me cree un userId a la
// tabla, sigo en articleSeed...)
User.hasMany(Article);
Article.belongsTo(User);

module.exports = { sequelize, User, Article }; // 45) Model, DataTypes };
// 45) PASO User cómo objeto entonces en en seed el require es objeto
// voy a seed.js

// 8) exporto la instancia creada arriba con s minuscula,
// por medio de esta conexión hago las consultas
//Permite en mi modelo User.js llevarme todo desde acá.
//Puedo usarlo desde todos mis modelos ahora
//sigo en User.js
