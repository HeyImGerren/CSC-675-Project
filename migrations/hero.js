'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hero', {
      h_name: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.TEXT
      },
      publisher: {
        type: Sequelize.TEXT
      },
      alias: {
        type: Sequelize.TEXT
      },
      occupation: {
        type: Sequelize.TEXT
      },
      birthplace: {
        type: Sequelize.TEXT
      },
      gender: {
        type: Sequelize.TEXT
      },
      weight: {
        type: Sequelize.TEXT
      },
      height: {
        type: Sequelize.TEXT
      },
      eye_color: {
        type: Sequelize.TEXT
      },
      hair_color: {
        type: Sequelize.TEXT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hero');
  }
};