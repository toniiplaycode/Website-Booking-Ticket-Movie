"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("CinemaRooms", [
      {
        id: "CT1",
        nameCinemaRoom: "VIP 1",
        filmId: "1",
        showTimeId: "T1",
        cinemaId: "CT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {},
};
