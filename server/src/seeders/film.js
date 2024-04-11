"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Films", [
      {
        nameFilm: "One piece",
        describe: "...",
        typeFilmId: "HH",
        time: "120p",
        author: "Luffi",
        actor: "Nami",
        image: "Link image",
        trailer: "Link trailer",
        price: 60000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {},
};
