/**
 * arquivo: routes/index.js
 * descrição: arquivo responsável pela chamada da API na aplicação no lado do Back-Énd
 *
 * data: 13/05/2020
 * author: Sabrina da Silva Pereira
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        sucess: "true",
        massage: "Olá, Seja bem-vindo(a) a API Node.js + PostgreSQL",
        version: "1.0.0"
    });
});

module.exports = router;