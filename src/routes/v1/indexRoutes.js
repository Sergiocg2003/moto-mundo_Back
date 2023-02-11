const express = require("express");
const router = express.Router();
const motosRoutes = require("./motosRoutes")

// localhost:3001/api/v1/
router.get("/", (req, res, next)=>{
    res.send("Hola Mundo")
})

router.use("/motos",  motosRoutes.router);

module.exports.router = router
