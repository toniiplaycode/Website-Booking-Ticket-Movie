"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CinemaRooms", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      CinemaId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nameCinemaRoom: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      numberOfSeats: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("CinemaRooms");
  },
};
