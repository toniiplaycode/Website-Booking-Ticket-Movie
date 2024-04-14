const bcrypt = require("bcryptjs");
const db = require("../models/index");
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

var salt = bcrypt.genSaltSync(10);

const dbTemp = db.CalendarRelease;

const getDetail = (Id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const check = await dbTemp.findOne({ where: { id: Id } });
      if (check === null) {
        resolve({
          status: "ERR",
          messge: "It is not defined",
        });
      }
      resolve({
        status: "OK",
        messge: "Get detail successful",
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
      console.log(all);
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
        nameCalendarRelease: data.nameCalendarRelease,
        cinemaId: data.cinemaId,
        cinemaRoomId: data.cinemaRoomId,
        filmId: data.filmId,
        showTimeId: data.showTimeId,
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
      temp.nameCalendarRelease = data.body.nameCalendarRelease;
      temp.cinemaId = data.body.cinemaId;
      temp.cinemaRoomId = data.body.cinemaRoomId;
      temp.filmId = data.body.filmId;
      temp.showTimeId = data.body.showTimeId;
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
};