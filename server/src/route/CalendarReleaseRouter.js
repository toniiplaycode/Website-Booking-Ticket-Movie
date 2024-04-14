const express = require("express");
const router = express.Router();
const Controller = require("../controllers/CalendarReleaseController");
const MiddleWare = require("../middleware/CalendarReleaseMiddleWare");

router.get("/getDetail/:id", Controller.getDetail);
router.get("/getAll", Controller.getAll);

//Chỉ có role R1 R2, data được chuyển qua body
router.post("/addNew", MiddleWare.AuthMiddleWare, Controller.addNew);

//Chỉ có role R1 R2, data được chuyển qua body
router.put("/update", MiddleWare.AuthMiddleWare, Controller.update);

//Chỉ có role R1 R2, data được chuyển qua body
router.delete("/deleteOBJ", MiddleWare.AuthMiddleWare, Controller.deleteOBJ);

module.exports = router;
