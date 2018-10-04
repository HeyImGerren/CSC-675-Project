'use strict';
module.exports = (sequelize, DataTypes) => {
  var hero_team = sequelize.define('hero_team', {
    t_name: DataTypes.TEXT,
    h_name: DataTypes.TEXT
  }, {});
  hero_team.associate = function(models) {
    // associations can be defined here
  };
  return hero_team;
};