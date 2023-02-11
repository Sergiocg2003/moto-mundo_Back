const express = require("express");
const router = express.Router();

// localhost:3001/api/v1/
router.get("/", (req, res, next)=>{
    res.send("Hola Mundo")
})

module.exports.router = router