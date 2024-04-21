const bcrypt = require("bcryptjs");
const db = require("../models/index");
const { ganneralAccessToken, ganneralRefreshToken } = require("./jwtService");
const pool = require("../config/commectDBWithQuery");
const { Op } = require("@sequelize/core");

var salt = bcrypt.genSaltSync(10);

const getDetailUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await db.User.findAll({ where: { id: userId } });
      if (checkUser === null) {
        resolve({
          status: "ERR",
          messge: "User is not defined",
        });
      }
      resolve({
        status: "OK",
        messge: "get detail User",
        data: checkUser,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allUser = await db.User.findAll();
      resolve({
        status: "OK",
        messge: "get all User",
        raw: false,
        allUser: allUser,
      });
    } catch (e) {
      reject("check", e);
    }
  });
};

let hashUserPassWord = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkEmail = await db.User.findOne({
        where: { email: data.email },
      });
      if (checkEmail) {
        resolve({
          status: "ERR",
          messge: "Email already exists",
        });
      }
      let hashPassword = await hashUserPassWord(data.password);
      const createNewUser = await db.User.create({
        email: data.email,
        password: hashPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        image: data.image,
        phoneNumber: data.phoneNumber,
      });
      if (createNewUser) {
        resolve({
          status: "OK",
          messge: "Create user successful",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let updateUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { id: data.params.id },
        raw: false,
      });
      user.firstName = data.body.firstName;
      user.lastName = data.body.lastName;
      user.address = data.body.address;
      user.phoneNumber = data.body.phoneNumber;
      user.image = data.body.image;
      let hashPassword = await hashUserPassWord(data.body.password);
      user.password = hashPassword;
      await user.save();
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

let updateRole = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { id: data.body.id },
        raw: false,
      });
      user.roleId = data.body.roleId;
      await user.save();
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

let deleteUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: data },
      });
      await user.destroy();
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

const loginUser = (UserLogin) => {
  return new Promise(async (resolve, reject) => {
    const { email, password } = UserLogin;
    try {
      const checkUser = await db.User.findOne({
        where: { email: email },
      });
      if (checkUser === null) {
        resolve({
          status: "ERR",
          message: "The user is not defined",
        });
      }
      const comparePassword = bcrypt.compareSync(password, checkUser.password);
      if (!comparePassword) {
        resolve({
          status: "ERR",
          message: "The password or user is incorrect",
        });
      }
      const access_token = await ganneralAccessToken({
        id: checkUser.id,
        roleId: checkUser.roleId,
      });
      const refresh_token = await ganneralRefreshToken({
        id: checkUser.id,
        roleId: checkUser.roleId,
      });
      resolve({
        status: "OK",
        message: "SUCCESS",
        access_token,
        refresh_token,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getDetailUser,
  getAllUser,
  createNewUser,
  updateUser,
  updateRole,
  deleteUser,
  loginUser,
};
