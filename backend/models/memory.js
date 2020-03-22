const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Memory = new Schema({
   title: {
      type: String
   },
   text: {
      type: String
   },
   type: {
      type: String
   },
   date: {
      type: Date
   }
}, {
   collection: 'memories'
})

module.exports = mongoose.model('Memory', Memory)
