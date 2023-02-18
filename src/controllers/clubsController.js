const clubsServices = require("../services/clubsServices.js");

//  /api/v1/clubs/:prod
// Funcionalidad para devolver un club en concreto
const getOneClub = (req, res, next) => {
  //PRIMERO obtengo el parámetro de ruta
  const { prod } = req.params;

  const oneClub = clubsServices.getOneClub(prod);

  if (oneClub) {
    res.send(oneClub);
  } else {
    res.status(404);
  }
};

//  /api/v1/clubs
// Funcionalidad para crear un club mediante el body
const createOneClub = (req, res, next) => {
    const { body } = req;
  
    if (!body.nombre || !body.descripcion)
      res.status(400).send({mensaje: "faltan datos"});
    else {
  
      // Extraigo los datos del body de la petición para mandarlos al servicio 
      const newClub = {
        "nombre": body.nombre,
        "descripcion": body.descripcion
      }
      const createdClub = clubsServices.createOneClub(newClub);
      console.log(createdClub)
      if (createdClub){
        res.status(200).send(createdClub);
      } 
      else{
        res.status(406).send("Ya existe");
      } 
    }
  
    res.end();
};


module.exports = {
    createOneClub,
    getOneClub
};