'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert( 'publisher', [
      {publisher_name:"DC Comics", release_date: 1938, creator:"Jerry Siegel", year_established: 1934},
      {publisher_name:"DC Comics", release_date: 1939, creator:"Bob Kane", year_established: 1934},
      {publisher_name:"DC Comics", release_date: 1941, creator:"William Moulton Marston", year_established: 1934},
      {publisher_name:"DC Comics", release_date: 1980, creator:"Marv Wolfman", year_established: 1934},
      {publisher_name:"DC Comics", release_date: 1940, creator:"Gardner Fox", year_established: 1934},
      {publisher_name:"DC Comics", release_date: 1955, creator:"Joseph Samachson", year_established: 1934},
      {publisher_name:"DC Comics", release_date: 1940, creator:"Martin Nodell", year_established: 1934},
      {publisher_name:"DC Comics", release_date: 1940, creator:"Bill Finger", year_established: 1934},
      {publisher_name:"DC Comics", release_date: 1965, creator:"Arnold Drake", year_established: 1934},
      {publisher_name:"DC Comics", release_date: 1980, creator:"Marv Wolfman", year_established: 1934},
      {publisher_name:"DC Comics", release_date: 1980, creator:"Marv Wolfman", year_established: 1934},
      {publisher_name:"Marvel Comics", release_date: 1963, creator:"Stan Lee", year_established: 1939},
      {publisher_name:"Marvel Comics", release_date: 1941, creator:"Joe Simon", year_established: 1939},
      {publisher_name:"Marvel Comics", release_date: 1962, creator:"Stan Lee", year_established: 1939},
      {publisher_name:"Marvel Comics", release_date: 1962, creator:"Stan Lee", year_established: 1939},
      {publisher_name:"Marvel Comics", release_date: 1964, creator:"Stan Lee", year_established: 1939},
      {publisher_name:"Marvel Comics", release_date: 1964, creator:"Stan Lee", year_established: 1939},
      {publisher_name:"Marvel Comics", release_date: 1963, creator:"Stan Lee", year_established: 1939},
      {publisher_name:"Marvel Comics", release_date: 1963, creator:"Stan Lee", year_established: 1939},
      {publisher_name:"Marvel Comics", release_date: 1975, creator:"Len Wein", year_established: 1939},
      {publisher_name:"Marvel Comics", release_date: 1974, creator:"Roy Thomas", year_established: 1939},
      {publisher_name:"Marvel Comics", release_date: 1963, creator:"Stan Lee", year_established: 1939},

      ], {} );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('publisher');
  }
};