"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ShowTime extends Model {
    static associate(models) {}
  }
  ShowTime.init(
    {
      showTimeStart: DataTypes.STRING,
      showTimeEnd: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ShowTime",
    }
  );
  return ShowTime;
};
