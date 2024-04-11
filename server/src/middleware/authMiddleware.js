const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authMiddleWare = (req, res, next) => {
  const token = req.headers.token;
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return res.status(404).json({
        status: "ERR",
        message: "The authMiddleWare",
      });
    }
    if (user?.isAdmin) {
      next();
    } else {
      return res.status(404).json({
        status: "ERR",
        message: "The authMiddleWare",
      });
    }
  });
};

const authUserMiddleWare = (req, res, next) => {
  const token = req.headers.token;
  const userID = req.params.id;
  console.log(userID);
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, users) {
    console.log(users?.id);
    if (err) {
      return res.status(404).json({
        status: "ERR",
        message: "The authMiddleWare",
      });
    }
    if (
      users?.roleId === "R1" ||
      users?.roleId === "R2" ||
      users?.id == userID
    ) {
      next();
    } else {
      return res.status(404).json({
        status: "ERR",
        message: "The authMiddleWare",
      });
    }
  });
};

module.exports = { authMiddleWare, authUserMiddleWare };
