var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var film_controller = require('../controllers/film');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// FILM ROUTES ///
// POST request for creating a Film.
router.post('/films', film_controller.film_create_post);
// DELETE request to delete Film.
router.delete('/films/:id', film_controller.film_delete);
// PUT request to update Film.
router.put('/films/:id', film_controller.film_update_put);
// GET request for one Film.
router.get('/films/:id', film_controller.film_detail);
// GET request for list of all Film items.
router.get('/films', film_controller.film_list);

/* GET detail film page */ 
router.get('/detail', film_controller.film_view_one_Page);

/* GET create film page */ 
router.get('/create', film_controller.film_create_Page); 

/* GET create update page */ 
router.get('/update', film_controller.film_update_Page); 

module.exports = router;