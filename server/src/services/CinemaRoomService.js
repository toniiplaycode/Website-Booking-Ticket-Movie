const bcrypt = require("bcryptjs");
const db = require("../models/index");
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

var salt = bcrypt.genSaltSync(10);

const dbTemp = db.CinemaRoom;

const getDetail = (Id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const check = await dbTemp.findOne({ where: { id: Id } });
      if (check === null) {
        resolve({
          status: "ERR",
          message: "It is not defined",
        });
      }
      resolve({
        status: "OK",
        message: "Get detail successful",
        data: check,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const all = await dbTemp.findAll();
      resolve({
        status: "OK",
        message: "get all successful",
        raw: false,
        all: all,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllWithCanema = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const all = await dbTemp.findAll({
        where: { CinemaId: data.query.CinemaId },
      });
      resolve({
        status: "OK",
        message: "get all successful",
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
      const check = await dbTemp.findOne({ where: { id: data.id } });
      if (check) {
        resolve({
          status: "ERR",
          message: "cinemaRoom already exist",
        });
        return;
      }
      await dbTemp.create({
        id: data.id,
        CinemaId: data.CinemaId,
        nameCinemaRoom: data.nameCinemaRoom,
        numberOfSeats: data.numberOfSeats,
      });
      resolve({
        status: "OK",
        message: "create successful",
      });
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
      temp.CinemaId = data.body.CinemaId;
      temp.nameCinemaRoom = data.body.nameCinemaRoom;
      temp.numberOfSeats = data.body.numberOfSeats;
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
        where: { id: data },
      });
      await temp.destroy();
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getDetail,
  getAll,
  addNew,
  update,
  deleteOBJ,
  getAllWithCanema,
};
