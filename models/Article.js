// 19) requiero sequelize y cargo mi modelo, con los nombres
// que corresponden
const { sequelize, Model, DataTypes } = require("./index");
class Article extends Model {}
Article.init(
  {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    author: DataTypes.STRING,
  },
  { sequelize, modelName: "article" }
);

// 21) le indico con sequelize cargar la tabla
// 23) comento sequelize para no perder las tablas,
// sigo en seed.js pasando esta función y la de User.js a una sola
// dentro de seed.js

// sequelize
//   .sync({ force: true })
//   .then(() => console.log("Las tablas fueron creadas"));

// 20) exporto mi modelo Article y la requiero en mi server.js
//sigo en server.js
module.exports = Article;
