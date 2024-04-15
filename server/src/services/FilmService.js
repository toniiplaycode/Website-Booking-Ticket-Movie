const bcrypt = require("bcryptjs");
const db = require("../models/index");
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const { Op } = require("@sequelize/core");

var salt = bcrypt.genSaltSync(10);

const getDetailFilm = (Id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const check = await db.Film.findOne({ where: { id: Id } });
      if (check === null) {
        resolve({
          status: "ERR",
          messge: "Film is not defined",
        });
      }
      resolve({
        status: "OK",
        messge: "get detail Film",
        data: check,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllFilm = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let pageSize = data.pageSize || 10;
      let page = data.page || 1;
      let field = data.field || "createdAt";
      let direction = data.direction || "DESC";
      let typeSearch = data.typeSearch || "ALL";
      let nameSearch = data.nameSearch || "";
      const offset = (page - 1) * pageSize;
      let all = [];
      let count;
      if (typeSearch == "ALL") {
        count = await db.Film.count();
        all = await db.Film.findAll({
          where: {
            [Op.or]: [
              { nameFilm: { [Op.like]: `%${nameSearch}%` } },
              { author: { [Op.like]: `%${nameSearch}%` } },
              { actor: { [Op.like]: `%${nameSearch}%` } },
            ],
          },
          limit: parseInt(pageSize),
          offset: offset,
          order: [[field, direction]],
        });
      } else {
        all = await db.Film.findAll({
          where: {
            [typeSearch]: { [Op.like]: `%${nameSearch}%` },
          },
        });
        count = all.length;
        all = await db.Film.findAll({
          where: {
            [typeSearch]: { [Op.like]: `%${nameSearch}%` },
          },
          limit: parseInt(pageSize),
          offset: offset,
          order: [[field, direction]],
        });
      }
      resolve({
        status: "OK",
        messge: "get all Film",
        raw: false,
        pageCurrent: page,
        totalPage: Math.round(parseInt(count) / parseInt(pageSize)),
        all: all,
      });
    } catch (e) {
      reject(e);
    }
  });
};

let addNewFilm = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Film.create({
        nameFilm: data.nameFilm,
        describe: data.describe,
        typeFilmId: data.typeFilmId,
        time: data.time,
        author: data.author,
        actor: data.actor,
        image: data.image,
        trailer: data.trailer,
        price: data.price,
      });
      resolve();
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
      film.describe = data.body.describe;
      film.typeFilmId = data.body.typeFilmId;
      film.time = data.body.time;
      film.author = data.body.author;
      film.actor = data.body.actor;
      film.image = data.body.image;
      film.trailer = data.body.trailer;
      film.price = data.body.price;
      await film.save();
      resolve();
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
};
