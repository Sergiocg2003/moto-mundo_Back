const usersModelo = require("../database/usersModelo.js");
const md5 = require("md5")
const {v4: uuid} = require("uuid")

const createOneUser = (usuario, password) => {
  
    // Implemento la lógica de negocio. Esta es, que el usuario tiene un id
    //que tiene una fecha de alta y una fecha de modificación
    const usuarioNuevo = {
      ...usuario,
      contraseña: md5(password.contraseña), //Cifra la contraseña antes de guardarla
      id: uuid(), //GENERAR UN ID ALEATORIO CON UUID
      fechaAlta: new Date().toLocaleDateString(),
      fechaModificacion: new Date().toLocaleDateString(),
      amigos: ""
    };

    // Llamo al modelo para realizar esa interacción con la BDD
    const usuarioInsertado = usersModelo.insertUser(usuarioNuevo)
    
    if(!usuarioInsertado) return false
    return usuarioInsertado
};

// Funcion que obtiene la informacion de un usuario en concreto
const getOneUser = (nombre) => {
    const oneUser = usersModelo.getOneUser(nombre);
    const user = {
      usuario: oneUser.usuario,
      contraseña: oneUser.contraseña,
      correo: oneUser.correo,
      moto: oneUser.moto,
      amigos: oneUser.amigos
    }
    return user;
};
  
// Funcion que permite actualizar los valores de un usuario
const updateOneUser = (nombre, usuario) => {
    const usuarioActualizado = {
      ...usuario,
      fechaModificacion: new Date().toLocaleDateString()
    }
  
    const updatedUser = usersModelo.updateOneUser(nombre, usuarioActualizado)
  
    if(!updatedUser){
      return false
    }
    else{
      return updatedUser
    }
};
  

//Funcionalidad para eliminar un usuario
const deleteOneUser = (nombre) => {
    const Usuario = usersModelo.getOneUser(nombre)
  
    if(!Usuario){
      return false
    }
    else{
      usersModelo.deleteOneUser(nombre)
  
      if(!usersModelo.getOneUser(nombre)){
        return Usuario
      }
      else{
        return false
      }
    }
};
  
  
module.exports = {
    createOneUser,
    getOneUser,
    updateOneUser,
    deleteOneUser
};