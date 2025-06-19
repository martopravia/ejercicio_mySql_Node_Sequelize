// 25) sequelize es la instancia de la conexión, debo importarla
//cómo tengo la instancia en index.js, la traigo del index de mis
// modelos, la exporta en un objeto y la desestructuro.
require("dotenv").config();
const { sequelize } = require("../models/index");

// 24) me traigo la funcion de sequelize y la transformo en
// una async await y la llamo
async function seed() {
  await sequelize.sync({ force: true });
  console.log("Las tablas fueron creadas");
}
seed();

// 26) para ejecutarlo hago node seed.js
// 27) me traigo require("dotenv").config() ya que la necesito aqui
