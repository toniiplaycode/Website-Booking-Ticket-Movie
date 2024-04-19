"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("PaymentMethods", [
      {
        namePaymentMethod: "MOMO",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        namePaymentMethod: "MASTER CARD",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        namePaymentMethod: "VN PAY",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        namePaymentMethod: "ZALO PAY",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {},
};
