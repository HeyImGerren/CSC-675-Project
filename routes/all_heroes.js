var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('all_heroes', { title: 'All Heroes' });
});

module.exports = router;