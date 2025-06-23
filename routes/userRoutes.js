// 4) configuro un basico con /user para poder verlo con nodemon
// hago lo mismo en articleRoutes.
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
// va solo / porque en serverjs. configure que sea
// la base /user, sigo en articleRoutes.js
// router.get("/", (req, res) => {
//   return res.send("Hola desde userRoutes");
// });
// 48) coloco las rutas, van a venir de mi userController (lo requiero arriba)

router.get("/", userController.index);
router.get("/crear", userController.create); // 49) primero esta ruta, sino la de
// arriba(/crear, abajo tomaria crear como id), sigo en userRoutes, comento
//la primer ruta de prueba router.get("/") con Hola desde userRoutes
router.get("/:id", userController.show);
router.post("/", userController.store);
router.get("/editar/:id", userController.edit);
router.post("/editar/:id", userController.update);
router.delete("/eliminar/:id", userController.destroy);

module.exports = router;
