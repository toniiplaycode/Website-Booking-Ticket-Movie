"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {}
  }
  Ticket.init(
    {
      userId: DataTypes.INTEGER,
      calendarReleaseId: DataTypes.INTEGER,
      seat: DataTypes.INTEGER,
      total: DataTypes.FLOAT,
      namePaymentMethod: DataTypes.STRING,
      nameStatus: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );
  return Ticket;
};
