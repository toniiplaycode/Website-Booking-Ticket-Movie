const bcrypt = require("bcryptjs");
const db = require("../models/index");
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const pool = require("../config/commectDBWithQuery");

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

const getAllWithFilmId = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const all = await dbTemp.findAll({
        where: { filmId: data.query.filmId },
      });
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

const timeStringToInt = (timeString) => {
  return (
    parseInt(timeString.slice(0, 2), 10) * 60 +
    parseInt(timeString.slice(3), 10)
  );
};

const timeIntToString = (timeInt) => {
  let hour = Math.floor(timeInt / 60);
  let minute = "" + (timeInt - hour * 60);
  if (hour > 23) {
    hour -= 24;
  }
  hour = "" + hour;
  return hour.padStart(2, "0") + ":" + minute.padStart(2, "0");
};

let addNew = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [releaseDate] = await pool.execute(
        "SELECT releaseDate FROM films where films.id= ?",
        [data.filmId]
      );
      let ArrReleaseDate = releaseDate[0].releaseDate.split("/");

      let ArrDateWatch = data.dateWatch.split("/");

      if (
        parseInt(ArrDateWatch[2]) < parseInt(ArrReleaseDate[2]) ||
        parseInt(ArrDateWatch[1]) < parseInt(ArrReleaseDate[1]) ||
        parseInt(ArrDateWatch[0]) < parseInt(ArrReleaseDate[0])
      ) {
        {
          resolve({
            status: "ERR",
            messge: "DateWatch error",
          });
          return;
        }
      }

      const [timeFilm] = await pool.execute(
        "SELECT time FROM films where films.id= ?",
        [data.filmId]
      );
      let showTimeEnd = timeIntToString(
        timeStringToInt(data.showTimeStart) + timeFilm[0].time
      );

      const [cinemaRoomId] = await pool.execute(
        "SELECT * FROM calendarReleases where cinemaRoomId= ? and dateWatch=?",
        [data.cinemaRoomId, data.dateWatch]
      );
      let allCinemaRoom = [];
      cinemaRoomId.forEach((element) => {
        let obj = {
          id: element.id,
          showTimeStart: timeStringToInt(element.showTimeStart),
          showTimeEnd: timeStringToInt(element.showTimeEnd),
        };
        allCinemaRoom.push(obj);
      });
      let objnew = {
        id: "objnew_Id",
        showTimeStart: timeStringToInt(data.showTimeStart),
        showTimeEnd: timeStringToInt(showTimeEnd),
      };
      allCinemaRoom.push(objnew);

      allCinemaRoom.sort((a, b) => {
        return a.showTimeStart - b.showTimeStart;
      });

      for (let i = 0; i < allCinemaRoom.length - 1; i++) {
        if (
          allCinemaRoom[i].showTimeEnd + 30 >
          allCinemaRoom[i + 1].showTimeStart
        ) {
          resolve({
            status: "ERR",
            messge: "Time selection error",
          });
          return;
        }
      }

      const createCalendar = await dbTemp.create({
        nameCalendarRelease: data.nameCalendarRelease,
        cinemaRoomId: data.cinemaRoomId,
        filmId: data.filmId,
        showTimeStart: data.showTimeStart,
        showTimeEnd: showTimeEnd,
        dateWatch: data.dateWatch,
      });
      if (createCalendar) {
        resolve({
          status: "OK",
          messge: "Create successful",
        });
      }
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
  getAllWithFilmId,
};
