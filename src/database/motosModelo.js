const datos = require("./motos.json")

const getAllMotos = () => {
    return datos.motos
}

const getOneMoto = (nombre) => {
    const oneMoto = datos.motos[nombre]
    return oneMoto
}

module.exports = {
    getAllMotos,
    getOneMoto
};