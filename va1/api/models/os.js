const mongoose = require('mongoose');

const osSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    numero: Number,
    departamento: String

}); 

module.exports = mongoose.model('os', osSchema);