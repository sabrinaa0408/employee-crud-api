/**
 * arquivo: app.js
 * descrição: arquivo responsável por fazer a conexão com arquivo server.js
 * data: 13/05/2020
 * author: Sabrina da Silva Pereira
 */


const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da Api(Employee):
const index = require('./routes/index');
//const employeeRoute = require('./routes/employee.routes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json'}));
app.use(cors());

app.use(index);
//app.use('/api/', employeeRoute);

module.exports = app;

