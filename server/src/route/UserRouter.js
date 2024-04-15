const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const MiddleWare = require("../middleware/UserAuthMiddleWare");

//Chỉ có role R1 R2 và User login
router.get(
  "/getDetailUser/:id",
  MiddleWare.authUserMiddleWare,
  userController.getDetailUser
);

//Chỉ có role R1 R2 và User login
//http://localhost:3000/api/user/getAllUser?pageSize=10&page=1&nameSearch=@&field=createdAt&direction=DESC&typeSearch=email
router.get(
  "/getAllUser",
  MiddleWare.authUserMiddleWare,
  userController.getAllUser
);

router.post("/createNewUser", userController.createNewUser);
router.put("/updateUser", userController.updateUser);

//Chi R1 R2 mới có thể đổi role của User, data chuyền từ body
router.put(
  "/updateRole",
  MiddleWare.authUserMiddleWareUseRole,
  userController.updateRole
);

//Chỉ có role R1 R2 và User login, data chuyền từ body
router.delete(
  "/deleteUser",
  MiddleWare.authUserMiddleWareUseRole,
  userController.deleteUser
);

router.post("/loginUser", userController.loginUser);
router.post("/logoutUser", userController.logoutUser);
router.post("/refreshToken", userController.refreshToken);

module.exports = router;
