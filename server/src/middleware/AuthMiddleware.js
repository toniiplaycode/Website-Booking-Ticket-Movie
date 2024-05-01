const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const db = require("../models/index");

dotenv.config();

const AuthMiddleWareAdminRole = (req, res, next) => {
  const token = req.headers.token;
  jwt.verify(token, process.env.ACCESS_TOKEN, async function (err, users) {
    if (err) {
      return res.status(404).json({
        status: "ERR",
        message: "The authMiddleWare",
      });
    }
    if (users?.roleId === "R1") {
      next();
    } else {
      return res.status(404).json({
        status: "ERR",
        message: "The authMiddleWare",
      });
    }
  });
};

const AuthMiddleWareAdminStaffRole = (req, res, next) => {
  const token = req.headers.token;
  jwt.verify(token, process.env.ACCESS_TOKEN, async function (err, users) {
    if (err) {
      return res.status(404).json({
        status: "ERR",
        message: "The authMiddleWare",
      });
    }
    if (users?.roleId === "R1" || users?.roleId === "R2") {
      next();
    } else {
      return res.status(404).json({
        status: "ERR",
        message: "The authMiddleWare",
      });
    }
  });
};

const AuthMiddleWareAdminStaffClientRole = (req, res, next) => {
  const token = req.headers.token;
  const userID = req.query.id || req.params.id;
  jwt.verify(token, process.env.ACCESS_TOKEN, async function (err, users) {
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

const AuthMiddleWareBody = (req, res, next) => {
  const token = req.headers.token;
  const userID = req.body.userId;
  jwt.verify(token, process.env.ACCESS_TOKEN, async function (err, users) {
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

module.exports = {
  AuthMiddleWareAdminRole,
  AuthMiddleWareAdminStaffRole,
  AuthMiddleWareAdminStaffClientRole,
  AuthMiddleWareBody,
};
