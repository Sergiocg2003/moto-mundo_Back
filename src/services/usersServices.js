const usersModelo = require("../database/usersModelo.js");
const {v4: uuid} = require("uuid")

const createOneUser = (usuario) => {
  
    // Implemento la lógica de negocio. Esta es, que el usuario tiene un id
    //que tiene una fecha de alta y una fecha de modificación
    const usuarioNuevo = {
      ...usuario,
      id: uuid(), //GENERAR UN ID ALEATORIO CON UUID
      fechaAlta: new Date().toLocaleDateString(),
      fechaModificacion: new Date().toLocaleDateString(),
    };
  
    // Llamo al modelo para realizar esa interacción con la BDD
    const usuarioInsertado = usersModelo.insertUser(usuarioNuevo)
    
    if(!usuarioInsertado) return false
    return usuarioInsertado
};


const getOneUser = (nombre) => {
    const oneUser = usersModelo.getOneUser(nombre);
    return oneUser;
};
  
  
const updateOneUser = (nombre, usuario) => {
    //TODO: implementar funcionalidad para actualizar un usuario
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
    //TODO: implementar funcionalidad para eliminar un usuario
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