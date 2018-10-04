'use strict';
module.exports = (sequelize, DataTypes) => {
  var superpower = sequelize.define('superpower', {
    sp.name: DataTypes.TEXT,
    h.name: DataTypes.TEXT
  }, {});
  superpower.associate = function(models) {
    // associations can be defined here
  };
  return superpower;
};