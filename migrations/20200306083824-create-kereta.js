"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("kereta", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_train: {
        type: Sequelize.STRING
      },
      id_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "typekereta",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      dateStart: {
        type: Sequelize.DATE
      },
      startStation: {
        type: Sequelize.STRING
      },
      startTime: {
        type: Sequelize.TIME
      },
      destinationStation: {
        type: Sequelize.STRING
      },
      arivalTime: {
        type: Sequelize.TIME
      },
      price: {
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("kereta");
  }
};
