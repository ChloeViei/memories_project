
// load mongoose since we need it to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('Memory', {
    text : String,                  // MongoDB will automatically generate an _id for each elements
    date : Date
});
