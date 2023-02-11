const express = require("express");
const router = express.Router();
const motosController = require("../../controllers/motosController.js");

// localhost:3001/api/v1/motos/
router.route("/")
    .get(motosController.getAllMotos)

// localhost:3001/api/v1/motos/:prod
router.route("/:prod")
    .get(motosController.getOneMoto)

module.exports.router = router