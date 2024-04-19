"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("CinemaRooms", [
      {
        id: "CT1",
        CinemaId: "CT1",
        nameCinemaRoom: "A1-01",
        numberOfSeats: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "CT2",
        CinemaId: "CT1",
        nameCinemaRoom: "A1-02",
        numberOfSeats: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "CT3",
        CinemaId: "CT1",
        nameCinemaRoom: "A2-01",
        numberOfSeats: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "CT4",
        CinemaId: "CT1",
        nameCinemaRoom: "A2-02",
        numberOfSeats: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "CT5",
        CinemaId: "CT2",
        nameCinemaRoom: "A1-01",
        numberOfSeats: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "CT6",
        CinemaId: "CT2",
        nameCinemaRoom: "A1-02",
        numberOfSeats: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "CT7",
        CinemaId: "CT2",
        nameCinemaRoom: "A2-01",
        numberOfSeats: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "CT8",
        CinemaId: "CT2",
        nameCinemaRoom: "A2-02",
        numberOfSeats: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {},
};
