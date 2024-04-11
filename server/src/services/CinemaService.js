const bcrypt = require("bcryptjs");
const db = require("../models/index");
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

var salt = bcrypt.genSaltSync(10);

const getDetailCinema = (Id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const check = await db.Cinema.findOne({ where: { id: Id } });
      if (check === null) {
        resolve({
          status: "ERR",
          messge: "Cinema is not defined",
        });
      }
      resolve({
        status: "OK",
        messge: "get detail Cinema",
        data: check,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllCinema = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const all = await db.Cinema.findAll();
      resolve({
        status: "OK",
        messge: "get all Cinema",
        raw: false,
        all: all,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let addNewCinema = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Cinema.create({
        id: data.id,
        nameCinema: data.nameCinema,
        address: data.address,
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

let updateCinema = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const cinema = await db.Cinema.findOne({
        where: { id: data.body.id },
        raw: false,
      });
      cinema.id = data.body.id;
      cinema.nameCinema = data.body.nameCinema;
      cinema.address = data.body.address;
      await cinema.save();
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

let deleteCinema = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let cinema = await db.Cinema.findOne({
        where: { id: data },
      });
      await cinema.destroy();
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getDetailCinema,
  getAllCinema,
  addNewCinema,
  updateCinema,
  deleteCinema,
};
