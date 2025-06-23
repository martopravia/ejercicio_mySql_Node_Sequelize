// 52) configuro todo para mi controller y vuelvo para article routes...
// 53) tengo que crear un seedArticles para crear la base de datos... voy a
// articleSeed...
// 56) tenia el require de Article entre {}, lo cambio porque no exporto
//  desde models/article.js un objeto sino la clase, voy a server.js...
const { Article } = require("../models/index");

const articleController = {
  index: async (req, res) => {
    try {
      // 62) agrego inclide: "user" la relacion en findAll({include: "user"})
      // me permite hacer article.user.firstname si quiero acceder
      //sigo en userController.js...
      const articles = await Article.findAll({ include: "user" });
      console.log(articles);
      return res.json(articles);
    } catch (error) {
      return res.status(500).json({
        message: "Error del servidor al obtener titulos",
        error: error.message,
      });
    }
  },
  create: async (req, res) => {
    res.send("Aca mostrariamos un form que no hay");
  },
  show: async (req, res) => {
    //funciona en insomnia y console.log
    try {
      const id = req.params.id;
      const article = await Article.findByPk(id);
      console.log(article);
      if (!article) {
        console.log(`El usuario con id: ${id} no existe`);
        return res.status(404).json({ message: "Titulo no existente" });
      }
      return res.json(article);
    } catch (error) {
      return res.status(500).json({
        message: `Error interno al buscar el titulo con id: ${id}`,
        error: error.message,
      });
    }
  },
  store: async (req, res) => {
    //este tengo que poner en server: app.use(express.json());
    // sino no lo puede leer en json
    try {
      const { title, content, author } = req.body;
      if (!title || !content || !author) {
        console.log("Falta alguno de los datos solicitados");
        res.status(400).json({ message: "Falta alguno de los datos" });
      }

      const article = await Article.create({
        title,
        content,
        author,
      });
      console.log(article);
      return res.status(201).json(article);
    } catch (error) {
      return res.status(500).json({
        message: "Error del servidor al crear usuario",
        error: error.message,
      });
    }
  },

  edit: async (req, res) => {
    try {
      const id = req.params.id;
      const article = await Article.findByPk(id);
      if (!article) {
        console.log(`el Titulo con id: ${id} no existe`);
        return res.status(404).json({
          message: `No hay titulo con el id: ${id}`,
        });
      }
      return res.json({
        message: "Aca deberia renderizarse un form",
        article,
      });
    } catch (error) {
      console.error("Error al buscar titulo para editar:", error);
      return res.status(500).json({
        message: "Error interno del servidor al buscar titulo para editar",
        error: error.message,
      });
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const { title, content, author } = req.body;
      const article = await Article.findByPk(id);
      if (!article) {
        console.log(`el titulo con id: ${id} no existe`);
        return res.status(404).json({
          message: `No hay titulo con el id: ${id}`,
        });
      }
      await article.update({ title, content, author });
      return res.json(article);
      console.log(article);
    } catch (error) {
      return res.status(500).json({
        message: `Error del servidor al actualizar el titulo con id: ${id}`,
        error: error.message,
      });
    }
  },
  destroy: async (req, res) => {
    try {
      const id = req.params.id;
      const article = await Article.findByPk(id);
      if (!article) {
        console.log(`el titulo con id: ${id} no existe`);
        return res.status(404).json({
          message: `No hay usuario con el id: ${id}`,
        });
      }
      await Article.destroy({ where: { id } });
      return res.json({ message: `Titulo con id: ${id} fue eliminado` });
    } catch (error) {
      return res.status(500).json({
        message: "Error interno del servidor al eliminar titulo",
        error: error.message,
      });
    }
  },
};

module.exports = articleController;
