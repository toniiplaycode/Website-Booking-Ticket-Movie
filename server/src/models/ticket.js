"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {}
  }
  Ticket.init(
    {
      userId: DataTypes.INTEGER,
      filmId: DataTypes.INTEGER,
      cinemaId: DataTypes.STRING,
      calendarReleaseId: DataTypes.INTEGER,
      seat: DataTypes.STRING,
      total: DataTypes.FLOAT,
      dateWatch: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );
  return Ticket;
};
