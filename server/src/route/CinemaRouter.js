const express = require("express");
const router = express.Router();
const Controller = require("../controllers/CinemaController");
const MiddleWare = require("../middleware/CinemaAuthMiddleWare");

router.get("/getDetail/:id", Controller.getDetailCinema);
router.get("/getAll", Controller.getAllCinema);

//Chỉ có role R1, Input "id""nameCinema" "address" (String hết) trong body
router.post("/addNew", MiddleWare.AuthMiddleWare, Controller.addNewCinema);

//Chỉ có role R1, Input "id""nameCinema" "address" (String hết) trong body
router.put("/update", MiddleWare.AuthMiddleWare, Controller.updateCinema);

//Chỉ có role R1, Input "id"(String) trong body
router.delete("/deleteOBJ", MiddleWare.AuthMiddleWare, Controller.deleteCinema);

module.exports = router;
