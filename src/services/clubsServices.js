const clubsModelo = require("../database/clubsModelo.js");
const {v4: uuid} = require("uuid")

const createOneClub = (club) => {

    const clubNuevo = {
      ...club,
      id: uuid(), //GENERAR UN ID ALEATORIO CON UUID
      fechaAlta: new Date().toLocaleDateString(),
    };
  
    // Llamo al modelo para realizar esa interacción con la BDD
    const clubInsertado = clubsModelo.insertClub(clubNuevo)
    
    if(!clubInsertado) return false
    return clubInsertado
};

module.exports = {
    createOneClub
};