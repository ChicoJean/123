const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors()); // Permitir requisições de outros domínios
app.use(express.json()); // Parse JSON do corpo da requisição

// Importando as rotas
const produtosRoutes = require("./pages/api/produtos");

// Usando a rota de produtos
app.use("/api/produtos", produtosRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
