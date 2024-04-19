"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Tickets", [
      {
        userId: DataTypes.INTEGER,
        filmId: DataTypes.INTEGER,
        cinemaId: DataTypes.STRING,
        calendarReleaseId: DataTypes.INTEGER,
        seat: DataTypes.STRING,
        total: DataTypes.FLOAT,
        dateWatch: DataTypes.STRING,
        namePaymentMethod: DataTypes.STRING,
        nameStatus: DataTypes.STRING,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {},
};
