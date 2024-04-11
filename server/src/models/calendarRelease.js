"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CalendarRelease extends Model {
    static associate(models) {}
  }
  CalendarRelease.init(
    {
      nameCalendarRelease: DataTypes.STRING,
      cinemaId: DataTypes.STRING,
      cinemaRoomId: DataTypes.STRING,
      filmId: DataTypes.INTEGER,
      showTimeId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CalendarRelease",
    }
  );
  return CalendarRelease;
};
