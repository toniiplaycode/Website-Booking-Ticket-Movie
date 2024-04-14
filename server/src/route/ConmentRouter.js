const express = require("express");
const router = express.Router();
const Controller = require("../controllers/ConmentController");
const MiddleWare = require("../middleware/ConmentAuthMiddleWare");

router.get("/getAll", Controller.getAll);

router.post("/addNew", Controller.addNew);

//Lấy id, userId của conment vào body để xóa
router.put("/update", MiddleWare.AuthMiddleWare, Controller.update);

//Lấy id, userId của conment vào body để xóa
router.delete("/deleteOBJ", MiddleWare.AuthMiddleWare, Controller.deleteOBJ);

module.exports = router;
