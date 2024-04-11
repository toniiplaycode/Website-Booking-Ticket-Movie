"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Cinemas", [
      {
        id: "CT",
        nameCinema: "CGV Cần Thơ",
        address: "Cần Thơ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {},
};
