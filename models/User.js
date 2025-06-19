const { sequelize, Model, DataTypes } = require("./index");
// 9) me traigo todo para poder utilizarlo desde index.js

// 10) AGREGO LOS PARAMETROS DE MI TABLA USER (FIRSTNAME, LASTNAME
//EMAIL Y PASSWORD)
class User extends Model {}
User.init(
  {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { sequelize, modelName: "user" }
);
// 15) coloco el sync y le pongo un .then, sigo en server
// 18) comento la sequelize.sync para que no se siga sobreescibiendo
// verifico en TablePlus que este ok creada, sio en Article.js
// sequelize
//   .sync({ force: true })
//   .then(() => console.log("Las tablas fueron creadas"));

// 11) exporto User para ser utilizada
module.exports = User;
// 12) creo el .env y copio los parametros de index.js
// y los pego en el .env para acomodar y pasarle los parametros
//dejamos solo el DB_DATABASE, DB_PASSWORD, etc
// sigo en .evn
