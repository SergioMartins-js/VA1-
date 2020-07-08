const mongoose = require('mongoose');

const fornecedorSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    nome: String,
    cnpj: Number,
    tipo: String

}); 

module.exports = mongoose.model('fornecedor', fornecedorSchema);