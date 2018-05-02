'use strict';
module.exports = (sequelize, DataTypes) => {
  var publisher = sequelize.define('publisher', {
    p_name: DataTypes.TEXT,
    release_date: DataTypes.DATE,
    creator: DataTypes.TEXT,
    year_est: DataTypes.INTEGER
  }, {});
  publisher.associate = function(models) {
    // associations can be defined here
  };
  return publisher;
};