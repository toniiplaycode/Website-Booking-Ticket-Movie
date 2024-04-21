"use strict";

const { Unique } = require("@sequelize/core/decorators-legacy");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Films", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameFilm: {
        Unique: true,
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nameTypeFilm: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      time: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      author: {
        type: Sequelize.STRING,
      },
      actor: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      trailer: {
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      language: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Films");
  },
};
