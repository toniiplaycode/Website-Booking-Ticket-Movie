"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TypeFilm extends Model {
    static associate(models) {}
  }
  TypeFilm.init(
    {
      nameType: DataTypes.STRING,
      describeType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TypeFilm",
    }
  );
  return TypeFilm;
};
