"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Roles", [
      {
        userId: "1",
        filmId: "1",
        cinemaId: "CT",
        cinemaRoomId: "VIP1",
        seat: "B-8",
        total: "60000",
        dateWatch: "8h",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {},
};
