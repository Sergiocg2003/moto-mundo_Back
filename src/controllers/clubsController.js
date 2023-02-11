const clubsServices = require("../services/clubsServices.js");

//  /api/v1/clubs
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
  
      if (createdClub) res.status(200).send(createdClub);
      else res.status(406).send("Ya existe");
    }
  
    res.end();
};


module.exports = {
    createOneClub
};