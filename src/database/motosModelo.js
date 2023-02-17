const datos = require("./motos.json")

// Funcionalidad que devuelve todos los datos del JSON
const getAllMotos = () => {
    return datos.motos
}

// Funcionalidad que devuelve la informacion de una moto del JSONs
const getOneMoto = (nombre) => {
    const oneMoto = datos.motos[nombre]
    return oneMoto
}

module.exports = {
    getAllMotos,
    getOneMoto
};