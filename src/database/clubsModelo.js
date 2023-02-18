const datos = require("./clubs.json")
const fs = require("fs")


// Funcionalidad que devuelve la informacion de un solo club del JSONs
const getOneClub = (nombre) => {
    const oneClub = datos.clubs[nombre]
    return oneClub
}


// Funcion para insertar un club en el JSON 
const insertClub = (club) => {
    //meto el club en el objeto clubs
    const nombre = club.nombre
    if(datos["clubs"][`${nombre}`]){
        return false
    }
    datos.clubs[nombre] = club

    //Escribo el fichero con esos nuevos datos
    fs.writeFileSync(
      "./src/database/clubs.json",
      JSON.stringify(datos, null, 2),
      "utf8"
    );

    return getOneClub(nombre)
}

module.exports = {
    insertClub,
    getOneClub
};