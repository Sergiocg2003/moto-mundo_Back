const motosModelo = require("../database/motosModelo");

const getAllMotos = () => {
  //Se llama al MODELO, más concretamente, A LA FUNCION QUE OBTIENE TODOS LOS PRODUCTOS
  const allMotos = motosModelo.getAllMotos();
  return allMotos;
};

const getOneMoto = (nombre) => {
    const oneMoto = motosModelo.getOneMoto(nombre);
    return oneMoto;
};

module.exports = {
    getAllMotos,
    getOneMoto
};