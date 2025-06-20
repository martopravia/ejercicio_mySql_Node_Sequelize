// 25) sequelize es la instancia de la conexión, debo importarla
//cómo tengo la instancia en index.js, la traigo del index de mis
// modelos, la exporta en un objeto y la desestructuro.
// 27) me traigo require("dotenv").config() ya que la necesito aqui
// require("dotenv").config();
// const { sequelize } = require("../models/index");
// 37) comento ambos require y los llevo a runAllSeeders.js, sigo alla

// 28) me traigo User para usarlo dentro de la async f(x)
const User = require("../models/user");
// 31) requiero faker en español: le da el alias faker para usar
const { fakerES: faker } = require("@faker-js/faker");

// 24) me traigo la funcion de sequelize y la transformo en
// una async await y la llamo
async function seed() {
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
  const users = [];
  for (let i = 0; i < 20; i++) {
    users.push({
      // 33) al usar faker cambio aca
      //   firstname: "Paco",
      //   lastname: "Perez",
      //   email: "paco.perez@gmail.com",
      //   password: "12345",
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
  }
  await User.bulkCreate(users);
  console.log("Se corrió seeder de Usuarios");
}
module.exports = seed;
//  41) exporto el modulo module.exports = seed;

// 26) para ejecutarlo hago seeders/seed.js
// 34) una vez cargado todo, hago node seeders/seed.js y carga los usuarios
// 35) ahora creamos carpeta seeders y creamos runAllSeeders.js
// para manejar todos desde alli, de aquí me llevo
// await sequelize.sync({ force: true });
//   console.log("Las tablas fueron creadas"); y lo comento aca
//arriba, sigo en runAllSeeders
