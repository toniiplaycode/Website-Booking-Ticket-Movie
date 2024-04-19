const express = require("express");
const router = express.Router();
const Controller = require("../controllers/FilmController");
const MiddleWare = require("../middleware/FilmAuthMiddleWare");

router.get("/getDetail/:id", Controller.getDetailFilm);

router.get("/getAll", Controller.getAllFilm);

//Chỉ có role R1 R2, data được đưa từ body xuống
router.post("/addNew", MiddleWare.AuthMiddleWare, Controller.addNewFilm);

//Chỉ có role R1 R2, data được đưa từ body xuống
router.put("/update", MiddleWare.AuthMiddleWare, Controller.updateFilm);

//Chỉ có role R1 R2, data được đưa từ body xuống
router.delete("/deleteOBJ", MiddleWare.AuthMiddleWare, Controller.deleteFilm);

module.exports = router;
