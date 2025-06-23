// 54) configuro todo en base a seed para el caso de la tabla de articleSeed
// una vez configurado voy a runAllSeeds...

// 25) sequelize es la instancia de la conexión, debo importarla
//cómo tengo la instancia en index.js, la traigo del index de mis
// modelos, la exporta en un objeto y la desestructuro.
// 27) me traigo require("dotenv").config() ya que la necesito aqui
// require("dotenv").config();
// const { sequelize } = require("../models/index");
// 37) comento ambos require y los llevo a runAllSeeders.js, sigo alla

// 28) me traigo User para usarlo dentro de la async f(x)
// 46) cambio const User = require("../models/user"); a: {User} objeto
// sigo en runAllSeeders.js

// 60) cambio  const Article = require("../models/article") por
// const { Article, User } = require("../models") y traigo modelos
// correctamente, sigo abajo...
const { Article, User } = require("../models");
// 31) requiero faker en español: le da el alias faker para usar
const { fakerES: faker } = require("@faker-js/faker");

// 24) me traigo la funcion de sequelize y la transformo en
// una async await y la llamo
async function articleSeed() {
  //   await sequelize.sync({ force: true });
  //   console.log("Las tablas fueron creadas");
  // 29) le paso await User.create, le mando datos, para correrlo
  // node seeders/seed.js
  //   await User.create({
  // 32) cambio los parametros que le di a firstname, lastname, por faker
  // cmento todo y voy a la funcion de abajo en mi loop

  // firstname: "Luis",
  // lastname: "Perez",
  // email: "paco.perez@gmail.com",
  // password: "12345"
  //   });
  // 30) si quiero crear varios usuarios, uso un for, declaro [] de users
  // y uso bulkCreate, que lo hace de una sola vez en la base de datos.
  // pasandole users mi array creado, lo ideal libreria de datos random
  // ej Faker-js, instalo npm i @faker-js/faker, veo documentación, voy arriba
  // y lo requiero

  const articles = [];
  for (let i = 0; i < 20; i++) {
    articles.push({
      // 33) al usar faker cambio aca
      //   firstname: "Paco",
      //   lastname: "Perez",
      //   email: "paco.perez@gmail.com",
      //   password: "12345",
      title: faker.book.title(),
      content: faker.lorem.paragraph(2),
      author: faker.book.author(),
      // 61) agrego un userId: le pongo que tire un numero del 1 al 20
      // aleatorio, y se puede repetir se puede hacer con Math tb, la idea
      // es que una persona pueda ser creador de muchos articulos
      //corro node seeders/runAllSeeders.js, en la base de datos queda
      // actualizado en la tabla hay una flechita en el id en la base
      // de datos y nos lleva al usuario sigo en articleController...
      userId: faker.number.int({ min: 1, max: 20 }),
    });
  }
  await Article.bulkCreate(articles);
  console.log("Se corrió seeder de Articulos");
}
module.exports = articleSeed;
//  41) exporto el modulo module.exports = seed;

// 26) para ejecutarlo hago seeders/seed.js
// 34) una vez cargado todo, hago node seeders/seed.js y carga los usuarios
// 35) ahora creamos carpeta seeders y creamos runAllSeeders.js
// para manejar todos desde alli, de aquí me llevo
// await sequelize.sync({ force: true });
//   console.log("Las tablas fueron creadas"); y lo comento aca
//arriba, sigo en runAllSeeders
