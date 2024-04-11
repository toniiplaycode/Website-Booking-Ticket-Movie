const express = require("express");
const router = express.Router();
const Controller = require("../controllers/CinemaController");

router.get("/getDetailCinema", Controller.getDetailCinema);
router.get("/getAllCinema", Controller.getAllCinema);
router.post("/addNewCinema", Controller.addNewCinema);
router.put("/updateCinema", Controller.updateCinema);
router.delete("/deleteCinema", Controller.deleteCinema);

module.exports = router;
