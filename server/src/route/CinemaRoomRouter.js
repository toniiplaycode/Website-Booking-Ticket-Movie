const express = require("express");
const router = express.Router();
const Controller = require("../controllers/CinemaRoomController");
const MiddleWare = require("../middleware/AuthMiddleware");

router.get("/getDetail/:id", Controller.getDetail);
router.get("/getAll", Controller.getAll);

router.get("/getAllWithCanema", Controller.getAllWithCanema);

//Chỉ có id: R1 mới có quyền, input: id(String) nameCinemaRoom(String) từ body
router.post("/addNew", MiddleWare.AuthMiddleWareAdminRole, Controller.addNew);

//Chỉ có id: R1 mới có quyền, input: id(String) nameCinemaRoom(String) từ body
router.put("/update", MiddleWare.AuthMiddleWareAdminRole, Controller.update);

//Chỉ có id: R1 mới có quyền, input: id(String) từ body
router.delete(
  "/deleteOBJ",
  MiddleWare.AuthMiddleWareAdminRole,
  Controller.deleteOBJ
);

module.exports = router;
