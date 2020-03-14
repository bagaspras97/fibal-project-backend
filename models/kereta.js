"use strict";
module.exports = (sequelize, DataTypes) => {
  const kereta = sequelize.define(
    "kereta",
    {
      name_train: DataTypes.STRING,
      id_type: DataTypes.INTEGER,
      dateStart: DataTypes.DATE,
      startStation: DataTypes.STRING,
      startTime: DataTypes.TIME,
      destinationStation: DataTypes.STRING,
      arivalTime: DataTypes.TIME,
      price: DataTypes.INTEGER,
      qty: DataTypes.INTEGER
    },
    {}
  );
  kereta.associate = function(models) {
    // associations can be defined here
    kereta.belongsTo(models.typekereta, {
      foreignKey: "id_type"
    });
  };
  return kereta;
};
