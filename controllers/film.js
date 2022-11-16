var Film = require('../models/film');
// List of all Films
exports.film_list = async function (req, res) {
    try {
        theFilms = await Film.find();
        res.send(theFilms);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Film.
exports.film_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Film.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Film create on POST.
exports.film_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Film();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"film_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.duration = req.body.duration;
    document.director = req.body.director;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume delete on DELETE. 
exports.film_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Film.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 


// Handle Film update form on PUT.
exports.film_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Film.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name)  
               toUpdate.name = req.body.name; 
    if(req.body.director) toUpdate.director = req.body.director; 
        if(req.body.duration) toUpdate.duration = req.body.duration; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 


exports.flim_view_all_Page = async function (req, res) {
    try {
        theFilms = await Film.find();
        res.render('films', { title: 'Film Search Results', results: theFilms });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle a show one view with id specified by query 
exports.film_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Film.findById( req.query.id) 
        res.render('filmdetail',  
{ title: 'Film Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a film. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.film_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('filmCreate', { title: 'Film Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 


// Handle building the view for updating a film. 
// query provides the id 
exports.film_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Film.findById(req.query.id) 
        res.render('filmUpdate', { title: 'Film Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 