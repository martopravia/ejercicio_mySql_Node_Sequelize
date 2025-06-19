// 4) configuro un basico con /user para poder verlo con nodemon
// hago lo mismo en articleRoutes.
const express = require("express");
const router = express.Router();

// va solo / porque en serverjs. configure que sea
// la base /user, sigo en articleRoutes.js
router.get("/", (req, res) => {
  return res.send("Hola desde userRoutes");
});

module.exports = router;
