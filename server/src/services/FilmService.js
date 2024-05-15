const bcrypt = require("bcryptjs");
const db = require("../models/index");
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const pool = require("../config/commectDBWithQuery");
const { Op } = require("@sequelize/core");

var salt = bcrypt.genSaltSync(10);

const getDetailFilm = (Id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [check] = await pool.execute(
        "SELECT films.*, typefilms.descriptionType FROM films JOIN typefilms ON films.nameTypeFilm=typefilms.nameTypeFilm where films.id=?",
        [Id]
      );
      if (check === null) {
        resolve({
          status: "ERR",
          message: "Film is not defined",
        });
      }
      resolve({
        status: "OK",
        message: "get detail Film",
        data: check,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllFilm = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const [all] = await pool.execute(
        "SELECT films.*, typefilms.descriptionType FROM films JOIN typefilms ON films.nameTypeFilm=typefilms.nameTypeFilm"
      );
      resolve({
        status: "OK",
        message: "get all Film",
        raw: false,
        all: all,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllTicketWithFilm = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [listIdCal] = await pool.execute(
        "SELECT id FROM calendarreleases where filmId = ?",
        [data.query.filmId]
      );

      let list = [];
      const [listTicket] = await pool.execute("SELECT * FROM tickets");
      let cnt = 0;
      listTicket.forEach((element) => {
        listIdCal.forEach((item) => {
          if (element.calendarReleaseId == item.id) {
            cnt += element.total;
            list.push(element.id);
          }
        });
      });

      const listFull = [];
      listFull.push({ quantity: list.length, total: cnt });

      resolve({
        status: "OK",
        message: "get all Film",
        raw: false,
        listIdTicket: list,
        All: listFull,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let addNewFilm = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checknameFilm = await db.Film.findOne({
        where: { nameFilm: data.body.nameFilm },
      });
      if (checknameFilm) {
        resolve({
          status: "ERR",
          message: "nameFilm already exist",
        });
      }

      let ArrReleaseDate = data.body.releaseDate.split("/");

      let check = 0;
      if (parseInt(ArrReleaseDate[2]) > new Date().getFullYear()) {
        check = 1;
      } else if (parseInt(ArrReleaseDate[2]) == new Date().getFullYear()) {
        if (parseInt(ArrReleaseDate[1]) > new Date().getMonth() + 1) {
          check = 1;
        } else if (parseInt(ArrReleaseDate[1]) == new Date().getMonth() + 1) {
          if (parseInt(ArrReleaseDate[0]) > new Date().getDate()) {
            check = 1;
          }
        }
      }

      console.log(check);
      if (check == 0) {
        resolve({
          status: "ERR",
          message: "releaseDate error",
        });
        return;
      }

      await db.Film.create({
        nameFilm: data.body.nameFilm,
        description: data.body.description,
        nameTypeFilm: data.body.nameTypeFilm,
        time: data.body.time,
        author: data.body.author,
        actor: data.body.actor,
        image: data.file.path.slice("../client/public".length),
        trailer: data.body.trailer,
        price: data.body.price,
        language: data.body.language,
        releaseDate: data.body.releaseDate,
      });
      resolve({
        status: "OK",
        message: "create successful ",
      });
    } catch (e) {
      reject(e);
    }
  });
};

let updateFilm = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const film = await db.Film.findOne({
        where: { id: data.body.id },
        raw: false,
      });

      film.nameFilm = data.body.nameFilm;
      film.description = data.body.description;
      film.nameTypeFilm = data.body.nameTypeFilm;
      film.time = data.body.time;
      film.author = data.body.author;
      film.actor = data.body.actor;
      film.image = data.file.path.slice("../client/public".length);
      film.trailer = data.body.trailer;
      film.price = data.body.price;
      film.language = data.body.language;
      film.releaseDate = data.body.releaseDate;
      await film.save();
      resolve({
        status: "OK",
        message: "Update a successful Film",
      });
    } catch (e) {
      reject(e);
    }
  });
};

let deleteFilm = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let film = await db.Film.findOne({
        where: { id: data },
      });
      await film.destroy();
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getDetailFilm,
  getAllFilm,
  addNewFilm,
  updateFilm,
  deleteFilm,
  getAllTicketWithFilm,
};
