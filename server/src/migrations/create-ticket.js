"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Tickets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      filmId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      cinemaId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      calendarReleaseId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      seat: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      total: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      dateWatch: {
        allowNull: false,
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
    await queryInterface.dropTable("Tickets");
  },
};
