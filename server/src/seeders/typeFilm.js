"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("TypeFilms", [
      {
        id: "HH",
        nameType: "Hoạt Hình",
        describeType: "Phim dành cho trẻ em",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "KD",
        nameType: "Kinh Dị",
        describeType: "Phim không dành cho trẻ em dưới 16 tuổi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {},
};
