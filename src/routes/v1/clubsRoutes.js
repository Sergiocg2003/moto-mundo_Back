const express = require("express");
const router = express.Router();
const clubsController = require("../../controllers/clubsController.js");

// localhost:3001/api/v1/clubs/
router.route("/")
    .post(clubsController.createOneClub);


module.exports.router = router;