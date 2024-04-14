const express = require("express");
const router = express.Router();
const Controller = require("../controllers/ShowTimeController");
const MiddleWare = require("../middleware/ShowTimeAuthMiddleWare");

router.get("/getDetail/:id", Controller.getDetail);
router.get("/getAll", Controller.getAll);

//Chỉ có role R1 R2 mới có quyền, input: id(String) showTimeStart(String) showTimeEnd(String) từ body
router.post("/addNew", MiddleWare.AuthMiddleWare, Controller.addNew);

//Chỉ có role R1 R2 mới có quyền, input: id(String) showTimeStart(String) showTimeEnd(String) từ body
router.put("/update", MiddleWare.AuthMiddleWare, Controller.update);

//Chỉ có role R1 R2 mới có quyền, input: id(String) từ body
router.delete("/deleteOBJ", MiddleWare.AuthMiddleWare, Controller.deleteOBJ);

module.exports = router;
