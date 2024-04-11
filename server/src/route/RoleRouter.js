const express = require("express");
const router = express.Router();
const Controller = require("../controllers/RoleController");

router.get("/getAll", Controller.getAll);
router.post("/addNew", Controller.addNew);
router.put("/update", Controller.update);
router.delete("/deleteOBJ", Controller.deleteOBJ);

module.exports = router;
