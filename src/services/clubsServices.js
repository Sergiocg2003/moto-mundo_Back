const clubsModelo = require("../database/clubsModelo.js");
const {v4: uuid} = require("uuid")

const getOneClub = (nombre) => {
  //Se llama al MODELO, más concretamente, A LA FUNCION QUE OBTIENE UN CLUB EN CONCRETO
    const oneClub = clubsModelo.getOneClub(nombre);
    return oneClub;
};

// Funcionalidad para crear un club añadiendole los datos que faciliten su almacenamiento en el JSON
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
    createOneClub,
    getOneClub
};