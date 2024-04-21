const express = require("express");
const router = express.Router();
const Controller = require("../controllers/RoleController");
const MiddleWare = require("../middleware/AuthMiddleware");

//Chỉ có id: R1 R2 mới có quyền
router.get("/getAll", MiddleWare.AuthMiddleWareAdminRole, Controller.getAll);

//Chỉ có id: R1 R2 mới có quyền, input: id(String) và nameRole(String) từ body
router.post("/addNew", MiddleWare.AuthMiddleWareAdminRole, Controller.addNew);

//Chỉ có id: R1 R2 mới có quyền, input: id(String) và nameRole(String) từ body
router.put("/update", MiddleWare.AuthMiddleWareAdminRole, Controller.update);

//Chỉ có id: R1 R2 mới có quyền, input: id(String) từ body
router.delete(
  "/deleteOBJ",
  MiddleWare.AuthMiddleWareAdminRole,
  Controller.deleteOBJ
);

module.exports = router;
