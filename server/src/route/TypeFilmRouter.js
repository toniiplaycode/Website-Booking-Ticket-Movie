const express = require("express");
const router = express.Router();
const Controller = require("../controllers/TypeFilmController");
const MiddleWare = require("../middleware/AuthMiddleware");

router.get("/getDetail", Controller.getDetail);
router.get("/getAll", Controller.getAll);

//Chỉ có role R1 R2, Input: "id" "nameType" "describeType" lấy từ body
router.post(
  "/addNew",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.addNew
);

//Chỉ có role R1 R2, Input: "id" "nameType" "describeType" lấy từ body
router.put(
  "/update",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.update
);

//Chỉ có role R1 R2, Input: "id" lấy từ body
router.delete(
  "/deleteOBJ",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.deleteOBJ
);

module.exports = router;
