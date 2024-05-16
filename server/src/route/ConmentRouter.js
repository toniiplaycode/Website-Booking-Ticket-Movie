const express = require("express");
const router = express.Router();
const Controller = require("../controllers/ConmentController");
const MiddleWare = require("../middleware/AuthMiddleware");

router.get("/getAll", Controller.getAll);

router.get("/getAllWithFilm", Controller.getAllWithFilm);

//Chỉ có R1,R2 và user login (userId từ body), data chuyền từ body
router.post("/addNew", MiddleWare.AuthMiddleWareCheckLogin, Controller.addNew);

//Chỉ có R1,R2 và user login (userId từ body), data chuyền từ body
router.put("/update", MiddleWare.AuthMiddleWareCheckLogin, Controller.update);

//Chỉ có R1,R2 và user login (userId từ body), data chuyền từ body
router.delete(
  "/deleteOBJ",
  MiddleWare.AuthMiddleWareCheckLogin,
  Controller.deleteOBJ
);

module.exports = router;
