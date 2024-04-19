"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    static associate(models) {}
  }
  Film.init(
    {
      nameFilm: DataTypes.STRING,
      description: DataTypes.STRING,
      nameTypeFilm: DataTypes.STRING,
      time: DataTypes.INTEGER,
      author: DataTypes.STRING,
      actor: DataTypes.STRING,
      image: DataTypes.STRING,
      trailer: DataTypes.STRING,
      price: DataTypes.FLOAT,
      language: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Film",
    }
  );
  return Film;
};
