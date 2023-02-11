const datos = require("./clubs.json")
const fs = require("fs")

const insertClub = (club) => {
    //meto el club en el objeto clubs
    const nombre = club.nombre
    if(datos["clubs"][`${nombre}`]){
        return false
    }
    datos.clubs[nombre] = club

    //Escribo el fichero con esos nuevos datos
    fs.writeFileSync(
      "./src/database/productos.json",
      JSON.stringify(datos, null, 2),
      "utf8"
    );
}

module.exports = {
    insertClub
};