const database = require('../index');

const INSERT_HERO_QUERY = `INSERT INTO hero
  (h_name,publisher,alias,occupation,birthplace,
  gender,weight,height,eye_color,hair_color)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
  RETURNING h_name`;

const addHero = heroObject => {
  const VALUES = [ heroObject.h_name,
    heroObject.publisher,
    heroObject.alias,
    heroObject.occupation,
    heroObject.birthplace,
    heroObject.gender,
    heroObject.weight,
    heroObject.height,
    heroObject.eye_color,
    heroObject.hair_color];
  
    return database
      .one( INSERT_HERO_QUERY, VALUES )
      .catch( error => console.log( "ERROR IN INSERT HERO QUERY", error ));
};

module.exports = addHero;