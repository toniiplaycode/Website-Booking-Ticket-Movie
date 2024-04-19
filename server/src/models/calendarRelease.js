"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CalendarRelease extends Model {
    static associate(models) {}
  }
  CalendarRelease.init(
    {
      nameCalendarRelease: DataTypes.STRING,
      cinemaRoomId: DataTypes.STRING,
      filmId: DataTypes.INTEGER,
      showTimeStart: DataTypes.STRING,
      showTimeEnd: DataTypes.STRING,
      dateWatch: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CalendarRelease",
    }
  );
  return CalendarRelease;
};
