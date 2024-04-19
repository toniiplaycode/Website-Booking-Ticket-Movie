const bcrypt = require("bcryptjs");
const db = require("../models/index");
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const pool = require("../config/commectDBWithQuery");

var salt = bcrypt.genSaltSync(10);

const dbTemp = db.Ticket;

const notEmptySeat = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [notEmptySeat] = await pool.execute(
        "select seat from tickets where calendarReleaseId =?",
        [data.calendarReleaseId]
      );
      let all = [];
      notEmptySeat.forEach((element) => {
        all.push(element.seat);
      });
      resolve({
        status: "OK",
        messge: "get test",
        raw: false,
        all: all,
      });
    } catch (e) {
      reject(e);
    }
  });
};

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
      const [total] = await pool.execute(
        "select price from films JOIN calendarreleases ON calendarreleases.filmId = films.id where calendarreleases.id = ?",
        [data.calendarReleaseId]
      );

      const [nuberSeat] = await pool.execute(
        "SELECT numberOfSeats FROM cinemarooms JOIN calendarreleases ON cinemarooms.id=calendarreleases.cinemaRoomId where calendarreleases.id=?",
        [data.calendarReleaseId]
      );

      const [notEmptySeat] = await pool.execute(
        "select seat from tickets where calendarReleaseId =?",
        [data.calendarReleaseId]
      );
      let all = [];
      notEmptySeat.forEach((element) => {
        all.push(element.seat);
      });
      let check = 0;
      all.forEach((item) => {
        if (item == data.seat) {
          resolve({
            status: "ERR",
            messge: "Seat selection error 1",
          });
          check = 1;
          return;
        }
      });
      if (data.seat > nuberSeat[0].numberOfSeats || data.seat <= 0) {
        resolve({
          status: "ERR",
          messge: "Seat selection error",
        });
        check = 1;
        return;
      }
      if (check) {
        return;
      }

      await dbTemp.create({
        userId: data.userId,
        calendarReleaseId: data.calendarReleaseId,
        seat: data.seat,
        total: total[0].price,
        nameStatus: data.nameStatus,
        namePaymentMethod: data.namePaymentMethod,
      });
      resolve({
        status: "OK",
        messge: "create successful",
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
      temp.filmId = data.body.filmId;
      temp.seat = data.body.seat;
      temp.total = data.body.total;
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
  notEmptySeat,
};
