const bcrypt = require("bcryptjs");
const db = require("../models/index");
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

var salt = bcrypt.genSaltSync(10);

const dbTemp = db.PaymentMethod;

const getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const all = await dbTemp.findAll();
      resolve({
        status: "OK",
        messge: "get all successful",
        raw: false,
        all: all,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let addNew = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await dbTemp.create({
        namePaymentMethod: data.body.namePaymentMethod,
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

let update = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const temp = await dbTemp.findOne({
        where: { id: data.body.id },
        raw: false,
      });
      temp.namePaymentMethod = data.body.namePaymentMethod;
      await temp.save();
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

let deleteOBJ = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let temp = await dbTemp.findOne({
        where: { id: data.body.id },
      });
      await temp.destroy();
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getAll,
  addNew,
  update,
  deleteOBJ,
};
