const usersModelo = require("../database/usersModelo.js");
const md5 = require("md5")
const {v4: uuid} = require("uuid")

const createOneUser = (usuario) => {
  
    // Implemento la lógica de negocio. Esta es, que el usuario tiene un id
    //que tiene una fecha de alta y una fecha de modificación
    const usuarioNuevo = {
      usuario: usuario.usuario,
      contraseña: md5(usuario.contraseña),
      correo: usuario.correo,
      moto: usuario.moto,
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


const getOneUser = (nombre) => {
    const oneUser = usersModelo.getOneUser(nombre);
    const user = {
      usuario: oneUser.usuario,
      contraseña: rev(oneUser.contraseña),
      correo: oneUser.correo,
      moto: oneUser.moto,
    } 
    return user;
};
  
  
const updateOneUser = (nombre, usuario) => {
    //funcionalidad para actualizar un usuario
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
  

const deleteOneUser = (nombre) => {
    //funcionalidad para eliminar un usuario
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