const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const MiddleWare = require("../middleware/AuthMiddleware");
const { uploadUser } = require("../middleware/uploadMiddleware");

router.post("/createNewUser", userController.createNewUser);

//Chỉ có role R1 R2 và User login (lấy trong token) và idUser trên params
router.get(
  "/getDetailUser",
  MiddleWare.AuthMiddleWareAdminStaffClientRole,
  userController.getDetailUser
);

//Chỉ có role R1 R2 (lấy trong token)
router.get(
  "/getAllUser",
  MiddleWare.AuthMiddleWareAdminStaffRole,
  userController.getAllUser
);

//Chỉ có role R1 R2 và User login (lấy trong token) và idUser trên params
router.post(
  "/updateUser",
  MiddleWare.AuthMiddleWareAdminStaffClientRole,
  uploadUser.single("avatar"),
  userController.updateUser
);

//Chỉ có role R1 R2 (lấy trong token)
router.put(
  "/updateRole",
  MiddleWare.AuthMiddleWareAdminRole,
  userController.updateRole
);

//Chỉ có role R1 R2 và User login (lấy trong token) và idUser trên params
router.delete(
  "/deleteUser",
  MiddleWare.AuthMiddleWareAdminRole,
  userController.deleteUser
);

router.post("/loginUser", userController.loginUser);
router.post("/logoutUser", userController.logoutUser);
router.post("/refreshToken", userController.refreshToken);

module.exports = router;
