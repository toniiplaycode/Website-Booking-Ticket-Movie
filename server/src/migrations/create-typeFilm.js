"use strict";

const { Unique } = require("@sequelize/core/decorators-legacy");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TypeFilms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameTypeFilm: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      descriptionType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("TypeFilms");
  },
};
