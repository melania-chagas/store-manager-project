const app = require('./app');

// A biblioteca dotenv é um módulo Javascript que carrega variáveis de ambientes armazenadas em um arquivo .env para o process.env.
require('dotenv').config();

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto.

app.listen(process.env.PORT, async () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
