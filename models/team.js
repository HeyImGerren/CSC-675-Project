'use strict';
module.exports = (sequelize, DataTypes) => {
  var team = sequelize.define('team', {
    t_name: DataTypes.TEXT,
    num_members: DataTypes.INTEGER
  }, {});
  team.associate = function(models) {
    // associations can be defined here
  };
  return team;
};