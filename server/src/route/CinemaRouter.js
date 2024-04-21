const express = require("express");
const router = express.Router();
const Controller = require("../controllers/CinemaController");
const MiddleWare = require("../middleware/AuthMiddleware");

router.get("/getDetail/:id", Controller.getDetailCinema);
router.get("/getAll", Controller.getAllCinema);

//Chỉ có role R1, Input "id""nameCinema" "address" (String hết) trong body
router.post(
  "/addNew",
  MiddleWare.AuthMiddleWareAdminRole,
  Controller.addNewCinema
);

//Chỉ có role R1, Input "id""nameCinema" "address" (String hết) trong body
router.put(
  "/update",
  MiddleWare.AuthMiddleWareAdminRole,
  Controller.updateCinema
);

//Chỉ có role R1, Input "id"(String) trong body
router.delete(
  "/deleteOBJ",
  MiddleWare.AuthMiddleWareAdminRole,
  Controller.deleteCinema
);

module.exports = router;
