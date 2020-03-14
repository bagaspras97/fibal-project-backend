'use strict';
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define('payment', {
    qty: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    status: DataTypes.STRING,
    attachment: DataTypes.INTEGER
  }, {});
  payment.associate = function(models) {
    // associations can be defined here
  };
  return payment;
};