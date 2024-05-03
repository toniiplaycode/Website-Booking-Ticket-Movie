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
        [data.query.calendarReleaseId]
      );
      let all = [];
      notEmptySeat.forEach((element) => {
        all.push(element.seat);
      });
      resolve({
        status: "OK",
        message: "get test",
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

const getDetailWithUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [all] = await pool.execute(
        "SELECT *, tickets.id, tickets.createdAt, tickets.updatedAt FROM tickets inner join calendarreleases on tickets.calendarReleaseId = calendarreleases.id inner join cinemarooms on calendarreleases.cinemaRoomId = cinemarooms.id inner join cinemas on cinemarooms.CinemaId = cinemas.id where userId = ?",
        [data.query.userId]
      );
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

let addNew = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [total] = await pool.execute(
        "select price from films JOIN calendarreleases ON calendarreleases.filmId = films.id where calendarreleases.id = ?",
        [data.body.calendarReleaseId]
      );

      const [nuberSeat] = await pool.execute(
        "SELECT numberOfSeats FROM cinemarooms JOIN calendarreleases ON cinemarooms.id=calendarreleases.cinemaRoomId where calendarreleases.id=?",
        [data.body.calendarReleaseId]
      );

      const arraySeat = data.body.arraySeat;

      const [notEmptySeat] = await pool.execute(
        "select seat from tickets where calendarReleaseId =?",
        [data.body.calendarReleaseId]
      );

      let check = 0;

      let intersection = await notEmptySeat.filter((element) =>
        arraySeat.includes(element.seat)
      );

      if (intersection.length != 0) {
        resolve({
          status: "ERR",
          message: "Seat selection error",
        });
        check = 1;
        return;
      }

      arraySeat.forEach((ele) => {
        if (ele > nuberSeat[0].numberOfSeats || ele <= 0) {
          resolve({
            status: "ERR",
            message: "Seat selection error 1",
          });
          check = 1;
          return;
        }
      });

      if (check) {
        return;
      }

      const user = await JSON.parse(atob(data.headers.token.split(".")[1]));

      arraySeat.forEach(async (ele) => {
        await dbTemp.create({
          userId: user.id,
          calendarReleaseId: data.body.calendarReleaseId,
          seat: ele,
          total: total[0].price,
          nameStatus: data.body.nameStatus,
          namePaymentMethod: data.body.namePaymentMethod,
        });
      });
      resolve({
        status: "OK",
        message: "create successful",
      });
    } catch (e) {
      reject("check");
    }
  });
};

let update = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = JSON.parse(atob(data.headers.token.split(".")[1]));
      const temp = await dbTemp.findOne({
        where: { id: user.id },
        raw: false,
      });
      temp.seat = data.body.seat;
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
  getDetailWithUser,
};
