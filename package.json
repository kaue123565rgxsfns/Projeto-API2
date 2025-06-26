const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir JSON
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('Bem-vindo à API do ProjetoAPI!');
});

// Rota de status
app.get('/status', (req, res) => {
  res.json({ status: 'online', versao: '1.0' });
});

// Rota de echo
app.post('/echo', (req, res) => {
  res.json({
    mensagem: 'Dados recebidos com sucesso!',
    dados: req.body
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
