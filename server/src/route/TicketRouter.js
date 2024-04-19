const express = require("express");
const router = express.Router();
const Controller = require("../controllers/TicketController");
const MiddleWare = require("../middleware/TicketAuthMiddleWare");

//Nếu role là R1 R2 hoặc có userId chuyền từ body lên chùng với tài khoảng đang nhập mới xem được
router.get("/getDetail/:id", MiddleWare.AuthMiddleWare, Controller.getDetail);
router.get("/getAll", MiddleWare.AuthMiddleWare, Controller.getAll);

//Nếu role là R1 R2 hoặc có userId, data chuyền từ body lên chùng với tài khoảng đang nhập mới thêm được
router.post("/addNew", MiddleWare.AuthMiddleWare, Controller.addNew);

router.get("/notEmptySeat", Controller.notEmptySeat);

//Nếu role là R1 R2 hoặc có userId, data chuyền từ body lên chùng với tài khoảng đang nhập mới sữa được (k thể sữa UserId)
router.put("/update", MiddleWare.AuthMiddleWare, Controller.update);

//Nếu role là R1 R2 hoặc có userId, id chuyền từ body lên chùng với tài khoảng đang nhập mới xóa được
router.delete("/deleteOBJ", MiddleWare.AuthMiddleWare, Controller.deleteOBJ);

module.exports = router;
