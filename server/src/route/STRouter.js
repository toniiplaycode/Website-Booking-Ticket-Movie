const express = require("express");
const router = express.Router();
const Controller = require("../controllers/ShowTimeController");

router.get("/getDetail/:id", Controller.getDetail);
router.get("/getAll", Controller.getAll);
router.post("/addNew", Controller.addNew);
router.put("/update", Controller.update);
router.delete("/deleteOBJ", Controller.deleteOBJ);

module.exports = router;
