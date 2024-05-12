const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const db = require("../models/index");

dotenv.config();

const AuthMiddleWareDeleteUser = (req, res, next) => {
  const token = req.headers.token;
  jwt.verify(token, process.env.ACCESS_TOKEN, async function (err, users) {
    if (err) {
      return res.status(200).json({
        status: "ERR",
        message: "can only be deleted by admin",
      });
    }
    if (users?.roleId === "R1") {
      next();
    } else {
      return res.status(200).json({
        status: "ERR",
        message: "can only be deleted by admin",
      });
    }
  });
};

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
  const userID = req.query.id || req.body.id || req.params.id;
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

const AuthMiddleWareCheckLogin = (req, res, next) => {
  const token = req.headers.token;
  jwt.verify(token, process.env.ACCESS_TOKEN, async function (err, users) {
    if (err) {
      return res.status(404).json({
        status: "ERR",
        message: "The authMiddleWare",
      });
    }
    if (users) {
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
  AuthMiddleWareCheckLogin,
  AuthMiddleWareDeleteUser,
};
