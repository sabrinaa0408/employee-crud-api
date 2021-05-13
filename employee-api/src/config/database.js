/**
 * arquivo: config/database.js
 * descrição: arquivo responsável pelas 'connectionsStrings' (CosmoDB e PostgreSQL)
 * data: 13/05/2020
 * author: Sabrina da Silva Pereira
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

//==> Conexão com a Base de Dados:

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('Base de dados conectado com sucesso');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};