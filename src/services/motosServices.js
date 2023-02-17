const motosModelo = require("../database/motosModelo");

const getAllMotos = () => {
  //Se llama al MODELO, más concretamente, A LA FUNCION QUE OBTIENE TODAS LAS MOTOS
  const allMotos = motosModelo.getAllMotos();
  return allMotos;
};

const getOneMoto = (nombre) => {
  //Se llama al MODELO, más concretamente, A LA FUNCION QUE OBTIENE UNA MOTO EN CONCRETO
    const oneMoto = motosModelo.getOneMoto(nombre);
    return oneMoto;
};

module.exports = {
    getAllMotos,
    getOneMoto
};