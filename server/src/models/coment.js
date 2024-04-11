"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Coment extends Model {
    static associate(models) {}
  }
  Coment.init(
    {
      userId: DataTypes.INTEGER,
      filmId: DataTypes.INTEGER,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Coment",
    }
  );
  return Coment;
};
