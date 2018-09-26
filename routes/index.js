var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/project-natours', function(req, res) {
  res.render('project-natours');
});

module.exports = router;
