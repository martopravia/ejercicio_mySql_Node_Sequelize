// 50) traigo User, y comienzo a escribir las rutas
// para probar con insomnia
// Empiezo a completar voy probando en insomnia, uso
// trycatch en este caso todo para json (no render ni send nada)
// voy a Article...

const { User } = require("../models/index");

const userController = {
  index: async (req, res) => {
    try {
      // 63) en el findAll hago la busqueda de la relacion con
      // include a Articles con mayuscula y plural
      const users = await User.findAll({ include: "Articles" });
      //   console.log(users); lo trae perfecto
      return res.json(users);
    } catch (error) {
      return res.status(500).json({
        message: "Error del servidor al obtener usuarios",
        error: error.message,
      });
    }
  },
  create: async (req, res) => {
    res.send("Aca mostrariamos un form que no hay");
  },
  show: async (req, res) => {
    //funciona en insomnia y console.log
    const id = req.params.id;
    try {
      const user = await User.findByPk(id);
      console.log(user);
      if (!user) {
        console.log(`El usuario con id: ${id} no existe`);
        return res.status(404).json({ message: "Usuario no existente" });
      }
      return res.json(user);
    } catch (error) {
      return res.status(500).json({
        message: `Error interno al buscar el usuario con id: ${id}`,
        error: error.message,
      });
    }
  },
  store: async (req, res) => {
    //este tengo que poner en server: app.use(express.json());
    // sino no lo puede leer en json
    try {
      const { firstname, lastname, email, password } = req.body;
      if (!firstname || !lastname || !email || !password) {
        console.log("Falta alguno de los datos solicitados");
        res.status(400).json({ message: "Falta alguno de los datos" });
      }

      const user = await User.create({
        firstname,
        lastname,
        email,
        password,
      });
      console.log(user);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({
        message: "Error del servidor al crear usuario",
        error: error.message,
      });
    }
    res.send("Store user");
  },

  edit: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findByPk(id);
      if (!user) {
        console.log(`el usuario con id: ${id} no existe`);
        return res.status(404).json({
          message: `No hay usuario con el id: ${id}`,
        });
      }
      return res.json({
        message: "Aca deberia renderizarse un form",
        user,
      });
    } catch (error) {
      console.error("Error al buscar usuario para editar:", error);
      return res.status(500).json({
        message: "Error interno del servidor al buscar usuario para editar",
        error: error.message,
      });
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const { firstname, lastname, email, password } = req.body;
      const user = await User.findByPk(id);
      if (!user) {
        console.log(`el usuario con id: ${id} no existe`);
        return res.status(404).json({
          message: `No hay usuario con el id: ${id}`,
        });
      }
      await user.update({ firstname, lastname, email, password });
      return res.json(user);
      console.log(user);
    } catch (error) {
      return res.status(500).json({
        message: `Error del servidor al actualizar el usuario con id: ${id}`,
        error: error.message,
      });
    }
  },
  destroy: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findByPk(id);
      if (!user) {
        console.log(`el usuario con id: ${id} no existe`);
        return res.status(404).json({
          message: `No hay usuario con el id: ${id}`,
        });
      }
      await User.destroy({ where: { id } });
      return res.json({ message: `Usuario con id: ${id} fue eliminado` });
    } catch (error) {
      return res.status(500).json({
        message: "Error interno del servidor al eliminar usuario",
        error: error.message,
      });
    }
  },
};

module.exports = userController;
