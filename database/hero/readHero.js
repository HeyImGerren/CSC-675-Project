const database = require('../index');

const READ_HERO_QUERY = `SELECT * FROM hero`;

const READ_HERO = () => {
  return database
    .manyOrNone(READ_HERO_QUERY)
    .catch( error => console.log("Error reading user issues: ", error ) );
};

module.exports = READ_HERO;