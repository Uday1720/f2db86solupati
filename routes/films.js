var express = require('express');
const film_controlers = require('../controllers/film');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 


/* GET films */
router.get('/', film_controlers.flim_view_all_Page);

/* GET detail film page */ 
router.get('/detail', film_controlers.film_view_one_Page);

/* GET create film page */ 
router.get('/create', film_controlers.film_create_Page); 

/* GET create update page */ 
router.get('/update', secured, film_controlers.film_update_Page); 

/* GET delete film page */ 
router.get('/delete', film_controlers.film_delete_Page);

module.exports = router;
