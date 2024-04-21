const express = require("express");
const router = express.Router();
const Controller = require("../controllers/PaymentMethodController");
const MiddleWare = require("../middleware/AuthMiddleware");

router.get("/getAll", Controller.getAll);

//Chỉ có R1,R2  data chuyền từ body
router.post(
  "/addNew",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.addNew
);

//Chỉ có R1,R2  data chuyền từ body
router.put(
  "/update",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.update
);

//Chỉ có R1,R2  data chuyền từ body
router.delete(
  "/deleteOBJ",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.deleteOBJ
);

module.exports = router;
