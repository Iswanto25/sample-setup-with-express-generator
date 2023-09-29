var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  moment.locale('id')
  var date = moment().format('DD-MMMM-YYYY');
  res.render('index', {
    title: 'Express',
    date: date,
   });
});

module.exports = router;
