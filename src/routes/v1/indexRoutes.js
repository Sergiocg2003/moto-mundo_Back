const express = require("express");
const router = express.Router();
const motosRoutes = require("./motosRoutes");
const clubsRoutes = require("./clubsRoutes");

// localhost:3001/api/v1/
router.get("/", (req, res, next)=>{
    res.send("Hola Mundo")
})

router.use("/motos",  motosRoutes.router);
router.use("/clubs",  clubsRoutes.router);

module.exports.router = router
