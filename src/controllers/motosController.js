const motosServices = require("../services/motosServices.js");

//  /api/v1/motos
// Funcionalidad para devolver todas las motos
const getAllMotos = (req, res, next) => {
    const allMotos = motosServices.getAllMotos();
    if (!Object.keys(allMotos).length == 0) {
      res.send(allMotos);
    } 
    else {
      res.status(404).end();
    }
};


//  /api/v1/motos/:prod
// Funcionalidad para devolver una moto en concreto
const getOneMoto = (req, res, next) => {
    //PRIMERO obtengo el parámetro de ruta
    const { prod } = req.params;
  
    const oneMoto = motosServices.getOneMoto(prod);
  
    if (oneMoto) {
      res.send(oneMoto);
    } else {
      res.status(404);
    }
};

module.exports = {
    getAllMotos,
    getOneMoto
};