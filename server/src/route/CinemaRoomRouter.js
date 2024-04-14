const express = require("express");
const router = express.Router();
const Controller = require("../controllers/CinemaRoomController");
const MiddleWare = require("../middleware/CinemaRoomAuthMiddleWare");

router.get("/getDetail/:id", Controller.getDetail);
router.get("/getAll", Controller.getAll);

//Chỉ có id: R1 mới có quyền, input: id(String) nameCinemaRoom(String) từ body
router.post("/addNew", MiddleWare.AuthMiddleWare, Controller.addNew);

//Chỉ có id: R1 mới có quyền, input: id(String) nameCinemaRoom(String) từ body
router.put("/update", MiddleWare.AuthMiddleWare, Controller.update);

//Chỉ có id: R1 mới có quyền, input: id(String) từ body
router.delete("/deleteOBJ", MiddleWare.AuthMiddleWare, Controller.deleteOBJ);

module.exports = router;
