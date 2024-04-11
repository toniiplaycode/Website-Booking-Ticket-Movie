"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    static associate(models) {}
  }
  Film.init(
    {
      nameFilm: DataTypes.STRING,
      describe: DataTypes.STRING,
      typeFilmId: DataTypes.STRING,
      time: DataTypes.STRING,
      author: DataTypes.STRING,
      actor: DataTypes.STRING,
      image: DataTypes.STRING,
      trailer: DataTypes.STRING,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Film",
    }
  );
  return Film;
};
