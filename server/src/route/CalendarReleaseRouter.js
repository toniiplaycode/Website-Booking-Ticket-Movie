const express = require("express");
const router = express.Router();
const Controller = require("../controllers/CalendarReleaseController");
const MiddleWare = require("../middleware/AuthMiddleware");

router.get("/getDetail/:id", Controller.getDetail);
router.get("/getAll", Controller.getAll);

//Chỉ có role R1 R2(token), data được chuyển qua body
router.post(
  "/addNew",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.addNew
);

//Chỉ có role R1 R2(token), data được chuyển qua body
router.put(
  "/update",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.update
);

//Chỉ có role R1 R2(token), data được chuyển qua body
router.delete(
  "/deleteOBJ",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.deleteOBJ
);

module.exports = router;
