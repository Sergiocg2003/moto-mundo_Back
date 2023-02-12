const motosServices = require("../services/motosServices.js");

//  /api/v1/motos
const getAllMotos = (req, res, next) => {
    const allPMotos = motosServices.getAllMotos();
  
    if (!Object.keys(allPMotos).length === 0) {
       res.send(allPMotos);
    } else {
       res.status(404).end();
    }
};



//  /api/v1/motos/:prod
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