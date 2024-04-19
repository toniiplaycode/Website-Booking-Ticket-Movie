"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CinemaRoom extends Model {
    static associate(models) {}
  }
  CinemaRoom.init(
    {
      CinemaId: DataTypes.STRING,
      nameCinemaRoom: DataTypes.STRING,
      numberOfSeats: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CinemaRoom",
    }
  );
  return CinemaRoom;
};
