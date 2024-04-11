const express = require("express");
const router = express.Router();
const Controller = require("../controllers/FilmController");

router.get("/getDetailFilm/:id", Controller.getDetailFilm);
router.get("/getAllFilm", Controller.getAllFilm);
router.post("/addNewFilm", Controller.addNewFilm);
router.put("/updateFilm", Controller.updateFilm);
router.delete("/deleteFilm", Controller.deleteFilm);

module.exports = router;
