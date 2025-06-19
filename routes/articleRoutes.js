// 5) configuro un basico con /articles para poder verlo con
// nodemon, sigo en index.js configurando la base de datos
const express = require("express");
const router = express.Router();

// va solo / porque en serverjs. configure que sea la
// base /articles, sigo en index.js
router.get("/", (req, res) => {
  res.send("Hola desde articleRoutes");
});

module.exports = router;
