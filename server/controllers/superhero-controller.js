var model = require('../models/superhero');

var mongoose = require('mongoose');
var Superhero = mongoose.model('superhero');
_ = require('lodash');

/**
 * Find article by id
 */
exports.superhero = function(req, res, next, id) {
  	Superhero.findOne({_id: id}, function(err, superhero) {
    	if (err) return next(err);
    	if (!superhero) return next(new Error('Failed to load article ' + id));
    	req.superhero = superhero;
    	next();
  	});
};

exports.find = function(req, res){
	Superhero.find(function(err, superheros) {
    	res.send(superheros);
  	});
  	
};

exports.show = function(req, res){
	res.json(req.superhero);
};

exports.create = function(req, res){
	var superhero = new Superhero(req.body);
	superhero.save(function(err){
		if(err){
			return res.json(500, {
				error: 'Cannot save the superhero'
			});
		}
		res.json(superhero);
	});
};

exports.update = function(req, res){
	var superhero = req.superhero;
 	superhero = _.extend(superhero, req.body);

 	superhero.save(function(err) {
    	if (err) {
      		return res.json(500, {
        	error: 'Cannot update the article'
      	});
    }
    res.json(superhero);
  });
};

exports.destroy = function(req, res){
	var superhero = req.superhero;
	superhero.remove(function(err){
		if(err){
			console.log(err);
			return res.json(500, {error: 'Cannot delete the superhero'});
		}
		res.json(superhero);
	});
};