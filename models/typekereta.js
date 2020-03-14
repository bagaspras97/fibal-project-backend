'use strict';
module.exports = (sequelize, DataTypes) => {
  const typekereta = sequelize.define('typekereta', {
    name: DataTypes.STRING
  }, {});
  typekereta.associate = function(models) {
    // associations can be defined here
  };
  return typekereta;
};