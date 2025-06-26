<h1>ProjetoAPI - API Simples com Node.js e Express</h1>

<p>Esta API foi desenvolvida como exemplo didático. Ela oferece endpoints básicos para testar requisições HTTP.</p>

<h2>🚀 Endpoints</h2>

<ul>
  <li><strong>GET /</strong> - Mensagem de boas-vindas</li>
  <li><strong>GET /status</strong> - Retorna o status da API</li>
  <li><strong>POST /echo</strong> - Recebe dados em JSON e retorna esses dados</li>
</ul>

<h2>🔧 Como Usar</h2>

<ol>
  <li>Clone este repositório:</li>
  <pre><code>git clone https://github.com/SEU_USUARIO/ProjetoAPI.git</code></pre>
  
  <li>Instale as dependências:</li>
  <pre><code>npm install</code></pre>
  
  <li>Execute a API:</li>
  <pre><code>node index.js</code></pre>
  
  <li>Acesse a API em:</li>
  <pre><code>http://localhost:3000</code></pre>
</ol>

<h2>📦 Exemplo de Requisição POST</h2>

<p>URL: <code>/echo</code></p>
<p>Body (JSON):</p>
<pre><code>{
  "nome": "João",
  "idade": 30
}</code></pre>

<p>Resposta:</p>
<pre><code>{
  "mensagem": "Dados recebidos com sucesso!",
  "dados": {
    "nome": "João",
    "idade": 30
  }
}</code></pre>

<h2>📫 Contato</h2>
<p>Dúvidas? Crie uma issue ou entre em contato pelo GitHub.</p>
