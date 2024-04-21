"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TypeFilm extends Model {
    static associate(models) {}
  }
  TypeFilm.init(
    {
      nameTypeFilm: DataTypes.STRING,
      descriptionType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TypeFilm",
    }
  );
  return TypeFilm;
};
