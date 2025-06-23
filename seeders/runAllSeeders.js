//55) agrego await require("./articleSeed") voy a articleController...

// 36) creo funcion async runAllSeeders, traigo de seeder el await
// sequelize.sync y el console.log sigo en seed.js y me traigo requires
// 38) me traigo ambos requires de seed.js y el de User
require("dotenv").config();
// 47) ya no necesito el const seed = require(."/seed") porque inicializamos
// el modelo en init en el index, sigo en index.js
const seed = require("./seed");
const articleSeed = require("./articleSeed");
// 39)requiero seed para llamar a la instancia Sequelize (con mayuscula)
// sino la tabla de cero no la crea y no borra al cargar nuevos
const { sequelize } = require("../models/index");

async function runAllSeeders() {
  await sequelize.sync({ force: true });
  console.log("Las tablas fueron creadas");
  await require("./seed")();
  await require("./articleSeed")();

  // 39) requiero con await a seed para ejecutarse y llamo a la f(x)
}
runAllSeeders();

// 40) ejecuto node seeders/runAllSeeders.js voy a seed y exporto
// 41) creo y voy a .env example
