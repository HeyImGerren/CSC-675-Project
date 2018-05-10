var express = require('express');
var router = express.Router();

const heroTable = require('../database/hero');
/* GET contact page. */
router.get('/', function(request, response, next) {
  // const HERO_PUBLISHER = request.body.publisher;
  // console.log(HERO_PUBLISHER);
  heroTable
    .readHeroByPublisher('DC Comics')
    .then((result) => {
      // response.send(result);
      response.status(200).json(result);
    })
    .catch((error) => console.log("ERROR IN DC ROUTE:", error));
});

module.exports = router;