'use strict';
module.exports = (sequelize, DataTypes) => {
  var hero = sequelize.define('hero', {
    h_name: DataTypes.TEXT,
    publisher: DataTypes.TEXT,
    alias: DataTypes.TEXT,
    occupation: DataTypes.TEXT,
    birthplace: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    weight: DataTypes.STRING,
    height: DataTypes.TEXT,
    eye_color: DataTypes.TEXT,
    hair_color: DataTypes.TEXT
  }, {});
  hero.associate = function(models) {
    // associations can be defined here
  };
  return hero;
};