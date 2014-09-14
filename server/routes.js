var express = require('express');
var router = express.Router();
var app = express();

//Controllers
var superheroController = require('./controllers/superhero-controller');

/* GET users listing. */
router.route('/superheros').
		get(superheroController.find).
		post(superheroController.create);

router.route('/superheros/:superheroId').
		get(superheroController.show).
		put(superheroController.update).
		delete(superheroController.destroy);


router.param('superheroId', superheroController.superhero);

module.exports = router;