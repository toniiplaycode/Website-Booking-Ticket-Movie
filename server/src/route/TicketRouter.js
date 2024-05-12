const express = require("express");
const router = express.Router();
const Controller = require("../controllers/TicketController");
const MiddleWare = require("../middleware/AuthMiddleware");

//Nếu role là R1 R2 hoặc có userId chuyền từ body lên chùng với tài khoản đang nhập mới xem được
router.get(
  "/getDetail",
  MiddleWare.AuthMiddleWareCheckLogin,
  Controller.getDetail
); //*

router.get(
  "/getDetailWithUser",
  MiddleWare.AuthMiddleWareCheckLogin,
  Controller.getDetailWithUser
);

router.get(
  "/getAll",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.getAll
);

//Nếu role là R1 R2 hoặc có userId, userId chuyền từ body lên chùng với tài khoản đang nhập mới thêm được
//data chuyền từ body lên chùng với tài khoảng đang nhập mới thêm được
router.post("/addNew", Controller.addNew);

router.get("/notEmptySeat", Controller.notEmptySeat);

//Nếu role là R1 R2 hoặc có userId, userId chuyền từ body lên chùng với tài khoản đang nhập mới sữa được
//data chuyền từ body lên chùng với tài khoảng đang nhập mới sữa được (k thể sữa UserId)
router.put("/update", MiddleWare.AuthMiddleWareCheckLogin, Controller.update); //*

router.put(
  "/updateStatus",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.updateStatus
);

router.put(
  "/updateStatusExpired",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  Controller.updateStatusExpired
);

//Nếu role là R1 R2 hoặc có userId, userId chuyền từ body lên chùng với tài khoản đang nhập mới xóa được
router.delete(
  "/deleteOBJ",
  MiddleWare.AuthMiddleWareCheckLogin,
  Controller.deleteOBJ
); //*

module.exports = router;
