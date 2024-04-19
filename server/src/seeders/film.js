"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Films", [
      {
        nameFilm: "ONE PIECE",
        description: "P - PHIM ĐƯỢC PHÉP PHỔ BIẾN ĐẾN NGƯỜI XEM Ở MỌI ĐỘ TUỔI.",
        nameTypeFilm: "Hoạt Hình",
        time: 120,
        author: "Oda Eiichiro",
        actor: "Luffy và Nami",
        image: "linkImage",
        trailer: "linkTrailer",
        price: 60000,
        language: "Tiếng Việt - Phụ đề Tiếng Anh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameFilm: "CÁI GIÁ CỦA HẠNH PHÚC",
        description:
          "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
        nameTypeFilm: "Tâm Lý",
        time: 115,
        author: "Nguyễn Ngọc Lâm",
        actor:
          "Xuân Lan, Thái Hoà, Lâm Thanh Nhã, Uyển Ân, Hữu Châu, Trâm Anh, Trương Thanh Long, Quang Minh, Bé Quyên,...",
        image: "linkImage",
        trailer: "linkTrailer",
        price: 60000,
        language: "Tiếng Việt - Phụ đề Tiếng Anh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameFilm: "B4S – TRƯỚC GIỜ “YÊU”",
        description: "P - PHIM ĐƯỢC PHÉP PHỔ BIẾN ĐẾN NGƯỜI XEM Ở MỌI ĐỘ TUỔI.",
        nameTypeFilm: "Hài, Tình cảm",
        time: 98,
        author: "Tùng Leo, Michael Thái, Huỳnh Anh Duy",
        actor:
          "Jun Vũ, Khánh Vân, Khazsak, Tôn Kinh Lâm, Tùng, Việt Hưng, Vinh Râu,…",
        image: "linkImage",
        trailer: "linkTrailer",
        price: 60000,
        language: "Tiếng Việt - Phụ đề Tiếng Anh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameFilm: "MÙA HÈ CỦA LUCA",
        description: "P - PHIM ĐƯỢC PHÉP PHỔ BIẾN ĐẾN NGƯỜI XEM Ở MỌI ĐỘ TUỔI.",
        nameTypeFilm: "Hài, Hoạt Hình, Phiêu Lưu",
        time: 99,
        author: "Enrico Casarosa",
        actor:
          "(Lồng tiếng): Jacob Tremblay, Jack Dylan Grazer, Emma Berman, Saverio Raimondo, Maya Rudolph, Marco Barricelli, Jim Gaffigan, Sandy Martin",
        image: "linkImage",
        trailer: "linkTrailer",
        price: 60000,
        language: "Tiếng Anh với phụ đề tiếng Việt, lồng tiếng",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameFilm: "TU VIỆN MÁU",
        description:
          "T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)",
        nameTypeFilm: "Kinh Dị",
        time: 85,
        author: "Michael Mohan",
        actor: "Sydney Sweeney, Álvaro Morte, Simona Tabasco",
        image: "linkImage",
        trailer: "linkTrailer",
        price: 60000,
        language: "Tiếng Anh - Phụ đề Tiếng Việt",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {},
};
