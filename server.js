//1) CONFIGURO SERVER.JS, requiero la userRoutes y articleRoutes
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");
const PORT = 3000;
// 16) requiero /models/users, sigo en index.js
// require("./models/user");
// 22) requiero models/article, sigo en Article.js
// require("./models/article");
// 56) no es necesario los require require("./models/user"); require("./models/article");
// porque los inicializo en models/index.js y los exporto de ahi, por lo que hago la
// siguiente importacion de sequelize const { sequelize } = require("./models");
// sigo en models/user.js para hacer las relaciones..
const { sequelize } = require("./models");

app.set("view engine", "ejs");
app.use(express.json());
app.use("/users", userRoutes); // 2) le paso mi vista url
app.use("/articles", articleRoutes); // 3)  le paso mi vista url

app.listen(PORT, (req, res) => {
  console.log(`Listening @ http://localhost:${PORT}`);
});
