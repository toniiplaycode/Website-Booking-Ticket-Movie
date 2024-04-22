const express = require("express");
const router = express.Router();
const Controller = require("../controllers/FilmController");
const MiddleWare = require("../middleware/AuthMiddleware");

router.get("/getDetail", Controller.getDetailFilm);

router.get("/getAll", Controller.getAllFilm);

//Chỉ có role R1 R2, data được đưa từ body xuống
router.post(
  "/addNew",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.addNewFilm
);

//Chỉ có role R1 R2, data được đưa từ body xuống
router.put(
  "/update",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.updateFilm
);

//Chỉ có role R1 R2, data được đưa từ body xuống
router.delete(
  "/deleteOBJ",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.deleteFilm
);

module.exports = router;
