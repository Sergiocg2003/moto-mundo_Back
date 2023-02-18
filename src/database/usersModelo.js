const datos = require("./users.json")
const fs = require("fs")

// Funcion que te devuelve la informacion de un usuario
const getOneUser = (nombre) => {
    const oneUser = datos.users[nombre]
    return oneUser
}

// Funcionalidad para insertar un usuario en el JSON
const insertUser = (usuario) => {
    //meto el usuario en el objeto users
    const nombre = usuario.usuario
    if(datos["users"][`${nombre}`]){
        return false
    }
    datos.users[nombre] = usuario

    //Escribo el fichero con esos nuevos datos
    fs.writeFileSync(
      "./src/database/users.json",
      JSON.stringify(datos, null, 2),
      "utf8"
    );

    return getOneUser(nombre)
}

// Funcionalidad para actualizar un usuario ya existente en el JSON
const updateOneUser = (nombre, NuevoUsuario) => {

    if(!datos["users"][`${nombre}`]){
        return false
    }

    datos.users[nombre].usuario = NuevoUsuario.usuario ? NuevoUsuario.usuario : datos.users[nombre].usuario
    datos.users[nombre].moto = NuevoUsuario.moto ? NuevoUsuario.moto : datos.users[nombre].moto
    datos.users[nombre].amigos = NuevoUsuario.amigos ? NuevoUsuario.amigos : datos.users[nombre].amigos
    datos.users[nombre].fechaModificacion = NuevoUsuario.fechaModificacion

    //Aqui escribimos los datos en el JSON
    fs.writeFileSync(
        "./src/database/users.json",
        JSON.stringify(datos, null, 2),
        "utf8"
    );
  
      return getOneUser(nombre)
}

// Funcionalidad para borrar un usuario del JSON
const deleteOneUser = (nombre) => {
    delete datos.users[nombre]
    
    fs.writeFileSync(
        "./src/database/users.json",
        JSON.stringify(datos, null, 2),
        "utf8"
    );
}


module.exports = {
    getOneUser,
    insertUser,
    updateOneUser,
    deleteOneUser
}