"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("TypeFilms", [
      {
        nameTypeFilm: "Hoạt Hình",
        descriptionType:
          "P - PHIM ĐƯỢC PHÉP PHỔ BIẾN ĐẾN NGƯỜI XEM Ở MỌI ĐỘ TUỔI.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameTypeFilm: "Tâm Lý",
        descriptionType:
          "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameTypeFilm: "Hài, Tình cảm",
        descriptionType:
          "P - PHIM ĐƯỢC PHÉP PHỔ BIẾN ĐẾN NGƯỜI XEM Ở MỌI ĐỘ TUỔI.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameTypeFilm: "Hài, Hoạt Hình, Phiêu Lưu",
        descriptionType:
          "P - PHIM ĐƯỢC PHÉP PHỔ BIẾN ĐẾN NGƯỜI XEM Ở MỌI ĐỘ TUỔI.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameTypeFilm: "Kinh Dị",
        descriptionType:
          "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {},
};
