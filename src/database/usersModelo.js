const datos = require("./users.json")
const fs = require("fs")


const getOneUser = (nombre) => {
    const oneUser = datos.users[nombre]
    return oneUser
}


const insertUser = (usuario) => {
    //meto el usuario en el objeto users
    const nombre = usuario.nombre
    if(datos["users"][`${nombre}`]){
        return false
    }
    datos.users[nombre] = usuario

    //Escribo el fichero con esos nuevos datos
    fs.writeFileSync(
      "./src/database/productos.json",
      JSON.stringify(datos, null, 2),
      "utf8"
    );

    return getOneUser(nombre)
}


const updateOneProduct = (nombre, Nuevoproducto) => {

    if(!datos["productos"][`${nombre}`]){
        return false
    }
    console.log(Nuevoproducto)
    datos.productos[nombre].precio = Nuevoproducto.precio ? Nuevoproducto.precio : datos.productos[nombre].precio
    datos.productos[nombre].categoria = Nuevoproducto.categoria ? Nuevoproducto.categoria : datos.productos[nombre].categoria
    datos.productos[nombre].fechaModificacion = Nuevoproducto.fechaModificacion

    fs.writeFileSync(
        "./src/database/productos.json",
        JSON.stringify(datos, null, 2),
        "utf8"
    );
  
      return getOneProduct(nombre)
}


const deleteOneUser = (nombre) => {
    delete datos.users[nombre]
    
    fs.writeFileSync(
        "./src/database/productos.json",
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