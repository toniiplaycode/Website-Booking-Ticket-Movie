const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authUserMiddleWare = (req, res, next) => {
  const token = req.headers.token;
  const userID = req.params.id;
  console.log(userID);
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, users) {
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

const authUserMiddleWareUseRole = (req, res, next) => {
  const token = req.headers.token;
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, users) {
    if (err) {
      return res.status(404).json({
        status: "ERR",
        message: "The authUserMiddleWareUseRole",
      });
    }
    if (users?.roleId === "R1") {
      next();
    } else {
      return res.status(404).json({
        status: "ERR",
        message: "The authUserMiddleWareUseRole",
      });
    }
  });
};

module.exports = {
  authUserMiddleWare,
  authUserMiddleWareUseRole,
};
