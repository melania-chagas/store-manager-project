// "mysql2/promise":  Isso permitirá utilizar o MySQL de forma assíncrona com async/await.
const mysql = require('mysql2/promise');

// A biblioteca dotenv é um módulo Javascript que carrega variáveis de ambientes armazenadas em um arquivo .env para o process.env.
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || 'StoreManager',
});

module.exports = connection;
