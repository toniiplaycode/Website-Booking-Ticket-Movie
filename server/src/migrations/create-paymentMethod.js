"use strict";

const { Unique } = require("@sequelize/core/decorators-legacy");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PaymentMethods", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      namePaymentMethod: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("PaymentMethods");
  },
};
