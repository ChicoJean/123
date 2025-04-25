// pages/api/produtos.js
let produtos = [];

// Rota para lidar com os produtos
const express = require("express");
const router = express.Router();

// Criar um novo produto (POST)
router.post("/", (req, res) => {
  const novoProduto = req.body;

  // Validação dos dados
  if (!novoProduto.codigo || !novoProduto.nome || !novoProduto.quantidade || !novoProduto.preco) {
    return res.status(400).json({ error: "Faltam dados obrigatórios!" });
  }

  // Adicionar o produto ao array
  produtos.push(novoProduto);
  return res.status(201).json(novoProduto); // Retorna o produto cadastrado
});

// Listar todos os produtos (GET)
router.get("/", (req, res) => {
  return res.status(200).json(produtos);
});

// Atualizar a quantidade de um produto (PUT)
router.put("/:codigo", (req, res) => {
  const { codigo } = req.params;
  const { quantidade } = req.body;

  const produto = produtos.find((p) => p.codigo === codigo);
  if (!produto) {
    return res.status(404).json({ error: "Produto não encontrado!" });
  }

  produto.quantidade += quantidade; // Atualiza a quantidade do produto

  return res.status(200).json(produto);
});

// Remover um produto (DELETE)
router.delete("/:codigo", (req, res) => {
  const { codigo } = req.params;

  const index = produtos.findIndex((p) => p.codigo === codigo);
  if (index === -1) {
    return res.status(404).json({ error: "Produto não encontrado!" });
  }

  produtos.splice(index, 1); // Remove o produto do array
  return res.status(200).json({ message: "Produto removido com sucesso!" });
});

module.exports = router;
