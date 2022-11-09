var express = require('express');
const film_controlers = require('../controllers/film');
var router = express.Router();
/* GET films */
router.get('/', film_controlers.flim_view_all_Page);
module.exports = router;
