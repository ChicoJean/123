const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  codigo: String,
  nome: String,
  quantidade: Number,
  categoria: String,
  tipo: String,
  cor: String,
  preco: Number,
  imagem: String,
  criadoEm: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Produto', ProdutoSchema);
