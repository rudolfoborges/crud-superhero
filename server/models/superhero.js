
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SuperHeroSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  superpower: {
    type: String,
    required: true,
    trim: true
  }
});

mongoose.model('superhero', SuperHeroSchema);

