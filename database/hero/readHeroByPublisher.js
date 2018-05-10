const database = require('../index');

const READ_HERO_BY_PUBLISHER_QUERY = `SELECT * FROM hero
WHERE publisher = $1`;

const READ_HERO_BY_PUBLISHER = publisher => {
  return database
    .manyOrNone(READ_HERO_BY_PUBLISHER_QUERY, publisher)
    .catch( error => console.log("Error reading user issues: ", error ) );
};

module.exports = READ_HERO_BY_PUBLISHER;