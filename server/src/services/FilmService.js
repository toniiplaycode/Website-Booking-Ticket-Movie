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

const getAllFilm = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const all = await db.Film.findAll();
      resolve({
        status: "OK",
        messge: "get all Film",
        raw: false,
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
        nameTypeFilm: data.nameTypeFilm,
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
      film.nameTypeFilm = data.body.nameTypeFilm;
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
