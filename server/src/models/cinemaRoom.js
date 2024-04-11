"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CinemaRoom extends Model {
    static associate(models) {}
  }
  CinemaRoom.init(
    {
      nameCinemaRoom: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CinemaRoom",
    }
  );
  return CinemaRoom;
};
