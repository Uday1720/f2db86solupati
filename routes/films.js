var express = require('express')
var router =express.Router();

router.get('/', function(req, res, next) {
    res.render('films', {title: 'Search Results Films'});
});

module.exports = router;