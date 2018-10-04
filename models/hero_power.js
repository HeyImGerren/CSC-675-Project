'use strict';
module.exports = (sequelize, DataTypes) => {
  var hero_power = sequelize.define('hero_power', {
    sp_name: DataTypes.TEXT,
    h_name: DataTypes.TEXT
  }, {});
  hero_power.associate = function(models) {
    // associations can be defined here
  };
  return hero_power;
};