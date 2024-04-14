const express = require("express");
const router = express.Router();
const Controller = require("../controllers/TypeFilmController");
const MiddleWare = require("../middleware/TypeFilmAuthMiddleWare");

router.get("/getDetail/:id", Controller.getDetail);
router.get("/getAll", Controller.getAll);

//Chỉ có role R1 R2, Input: "id" "nameType" "describeType" lấy từ body
router.post("/addNew", MiddleWare.AuthMiddleWare, Controller.addNew);

//Chỉ có role R1 R2, Input: "id" "nameType" "describeType" lấy từ body
router.put("/update", MiddleWare.AuthMiddleWare, Controller.update);

//Chỉ có role R1 R2, Input: "id" lấy từ body
router.delete("/deleteOBJ", MiddleWare.AuthMiddleWare, Controller.deleteOBJ);

module.exports = router;
