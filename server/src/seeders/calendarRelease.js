"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("CalendarReleases", [
      {
        nameCalendarRelease: DataTypes.STRING,
        cinemaId: DataTypes.STRING,
        cinemaRoomId: DataTypes.STRING,
        filmId: DataTypes.INTEGER,
        showTimeStart: DataTypes.STRING,
        showTimeEnd: DataTypes.STRING,
        dateWatch: DataTypes.STRING,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {},
};
