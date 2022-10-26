const app = require('./app');
const connection = require('./connection');

// A biblioteca dotenv é um módulo Javascript que carrega variáveis de ambientes armazenadas em um arquivo .env para o process.env.
require('dotenv').config();

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto.

app.listen(process.env.PORT, async () => {
  console.log(`Escutando na porta ${process.env.PORT}`);

  // para testar a comunicação com o MySQL
  const [result] = await connection.execute('SELECT 1');
  if (result) {
    console.log('MySQL connection ok');
  }
});
