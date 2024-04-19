"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Cinemas", [
      {
        id: "CT1",
        nameCinema: "Rạp Phim T chi nhánh Cần Thơ 1",
        address: "Nguyễn Văn Linh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "CT2",
        nameCinema: "Rạp Phim T chi nhánh Cần Thơ 2",
        address: "Nguyễn Văn Cừ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "SG1",
        nameCinema: "Rạp Phim T chi nhánh TP.Hồ Chí Minh 1",
        address: "Cách Mạng Tháng 8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "SG2",
        nameCinema: "Rạp Phim T chi nhánh TP.Hồ Chí Minh 2",
        address: "Hai Bà Trưng",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {},
};
