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
exports.film_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Film detail: ' + req.params.id);
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
// Handle Film delete form on DELETE.
exports.film_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Film delete DELETE ' + req.params.id);
};
// Handle Film update form on PUT.
exports.film_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Film update PUT' + req.params.id);
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