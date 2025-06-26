const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo à API do ProjetoAPI!');
});
app.get('/status', (req, res) => {
  res.json({ status: 'online', versao: '1.0' });
});

app.post('/echo', (req, res) => {
  res.json({
    mensagem: 'Dados recebidos com sucesso!',
    dados: req.body
  });
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
