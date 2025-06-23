// 51) comienzo a replicar todo para Article, al igual que en
// User, voy a index..
// 19) requiero sequelize y cargo mi modelo, con los nombres
// que corresponden
const { DataTypes, Model } = require("sequelize");
// const sequelize = require("./index").sequelize;

class Article extends Model {
  static initModel(sequelize) {
    Article.init(
      {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        author: DataTypes.STRING,
      },
      { sequelize, modelName: "Article" }
    );
    return Article;
  }

  // 58) NO VA ESTO agrego la relacion con User... sigo en models/index.js...
  // static associate(models) {
  //   Article.belongsTo(models.User, {
  //     foreignKey: "userId",
  //     as: "author",
  //   });
  // }
}

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
