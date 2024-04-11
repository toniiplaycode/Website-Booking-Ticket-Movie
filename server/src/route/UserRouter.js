const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const MiddleWare = require("../middleware/authMiddleware");

router.get(
  "/getDetailUser/:id",
  MiddleWare.authUserMiddleWare,
  userController.getDetailUser
);
router.get(
  "/getAllUser",
  MiddleWare.authUserMiddleWare,
  userController.getAllUser
);
router.post("/createNewUser", userController.createNewUser);
router.put("/updateUser", userController.updateUser);
router.put(
  "/updateRole",
  MiddleWare.authUserMiddleWare,
  userController.updateRole
);
router.delete(
  "/deleteUser",
  MiddleWare.authUserMiddleWare,
  userController.deleteUser
);

router.post("/loginUser", userController.loginUser);
router.post("/logoutUser", userController.logoutUser);

router.post("/refreshToken", userController.refreshToken);

module.exports = router;
