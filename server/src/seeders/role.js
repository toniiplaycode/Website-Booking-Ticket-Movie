"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Roles", [
      {
        id: "R1",
        nameRole: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "R2",
        nameRole: "Staff",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "R3",
        nameRole: "Client",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {},
};
