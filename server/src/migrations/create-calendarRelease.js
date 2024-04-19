"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CalendarReleases", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameCalendarRelease: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cinemaRoomId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      filmId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      showTimeStart: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      showTimeEnd: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("CalendarReleases");
  },
};
