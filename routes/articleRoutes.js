//51 copio las rutas de userRoutes pero cambio por article

// 5) configuro un basico con /articles para poder verlo con
// nodemon, sigo en index.js configurando la base de datos
const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

// va solo / porque en serverjs. configure que sea la
// base /articles, sigo en index.js
// router.get("/", (req, res) => {
//   res.send("Hola desde articleRoutes");
// });
router.get("/", articleController.index);
router.get("/crear", articleController.create); // 49) primero esta ruta, sino
// la de arriba(/crear, abajo tomaria crear como id), sigo en userRoutes,
// comento la primer ruta de prueba router.get("/") con Hola desde userRoutes
router.get("/:id", articleController.show);
router.post("/", articleController.store);
router.get("/editar/:id", articleController.edit);
router.post("/editar/:id", articleController.update);
router.delete("/eliminar/:id", articleController.destroy);

module.exports = router;

module.exports = router;
