'use strict';
module.exports = (sequelize, DataTypes) => {
  var hero_publisher = sequelize.define('hero_publisher', {
    p_name: DataTypes.TEXT
  }, {});
  hero_publisher.associate = function(models) {
    // associations can be defined here
  };
  return hero_publisher;
};