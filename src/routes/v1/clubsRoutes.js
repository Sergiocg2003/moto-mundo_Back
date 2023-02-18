const express = require("express");
const router = express.Router();
const clubsController = require("../../controllers/clubsController.js");

// localhost:3001/api/v1/clubs/
router.route("/")
    .post(clubsController.createOneClub);

// localhost:3001/api/v1/clubs/:param
router.route("/:param")
    .get(clubsController.getOneClub);

module.exports.router = router;