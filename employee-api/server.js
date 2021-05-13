/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda a configuração e execução do Back-End('Employee')
 * data: 13/05/2020
 * author: Sabrina da Silva Pereira
 */

// eslint-disable-next-line no-unused-vars
const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação sendo executada na porta:', port);
});