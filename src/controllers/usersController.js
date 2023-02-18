const usersServices = require("../services/usersServices.js");

//  /api/v1/users
// Funcionalidad para crear un usuario con los datos dados a traves del body
const createOneUser = (req, res, next) => {
    const { body } = req;

    if (!body.usuario || !body.moto || !body.correo || !body.contraseña)
        res.status(400).send({mensaje: "faltan datos"});
    else {
  
      // Extraigo los datos del body de la petición para mandarlos al servicio 
      const newUser = {
        "usuario": body.usuario,
        "correo": body.correo,
        "moto": body.moto,
      }
      const passwword = {"contraseña": body.contraseña}
      const createdUser = usersServices.createOneUser(newUser, passwword);
  
      if (createdUser) res.status(200).send(createdUser);
      else res.status(406).send("Ya existe");
    }
  
    res.end();
};



//  /api/v1/users/:prod
// Funcionalidad para coger los datos de un usuario en completo
const getOneUser = (req, res, next) => {
    //PRIMERO obtengo el parámetro de ruta
    const { prod } = req.params;
  
    const oneUser = usersServices.getOneUser(prod);
  
    if (oneUser) {
      res.send(oneUser);
    } else {
      res.status(404);
    }
};

// Funcionalidad para actualizar la información de un usuario
const updateOneUser = (req, res, next) => {
    const { prod } = req.params;
    const { body } = req;
  
    if (!body.usuario && !body.moto && !body.amigo)
    res.status(400).send({mensaje: "faltan datos"});
    else {
  
    // Extraigo los datos del body de la petición para mandarlos al servicio 
      const updateUser = {
        "usuario": body.usuario,
        "moto": body.moto,
        "amigos": body.amigo
      }
  
      const updatedUser = usersServices.updateOneUser(prod, updateUser)
  
      if(!updatedUser){
        res.status(400).end();
      }
      else{
        res.send(updatedUser).end()
      }
    }
};

// Funcionalidad para borrar un usuario de la base de datos
const deleteOneUser = (req, res, next) => {
    const { prod } = req.params;
  
    const userDeleted = usersServices.deleteOneUser(prod);
  
    if(!userDeleted){
      res.status(400).end();
    }
    else{
      res.send(userDeleted).end();
    }
};

module.exports = {
    createOneUser,
    getOneUser,
    updateOneUser,
    deleteOneUser
};