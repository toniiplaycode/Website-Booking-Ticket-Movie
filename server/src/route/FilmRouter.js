const express = require("express");
const router = express.Router();
const Controller = require("../controllers/FilmController");
const MiddleWare = require("../middleware/AuthMiddleware");
const { uploadFilm } = require("../middleware/uploadMiddleware");

router.get("/getDetail", Controller.getDetailFilm);

router.get("/getAll", Controller.getAllFilm);

router.get(
  "/getAllTicketWithFilm",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.getAllTicketWithFilm
);

//Chỉ có role R1 R2, data được đưa từ body xuống mới được
router.post(
  "/addNew",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  uploadFilm.single("file"),
  Controller.addNewFilm
);

//Chỉ có role R1 R2, data được đưa từ body xuống
router.post(
  "/update",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  uploadFilm.single("file"),
  Controller.updateFilm
);

//Chỉ có role R1 R2, data được đưa từ body xuống
router.delete(
  "/deleteOBJ",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.deleteFilm
);

module.exports = router;
