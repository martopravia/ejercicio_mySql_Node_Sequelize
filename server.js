//1) CONFIGURO SERVER.JS, requiero la userRoutes y articleRoutes
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");
const PORT = 3000;
// 16) requiero /models/users, sigo en index.js
require("./models/user");
// 22) requiero models/article, sigo en Article.js
require("./models/article");

app.set("view engine", "ejs");
app.use("/user", userRoutes); // 2) le paso mi vista url
app.use("/articles", articleRoutes); // 3)  le paso mi vista url

app.listen(PORT, (req, res) => {
  console.log(`Listening @ http://localhost:${PORT}`);
});
