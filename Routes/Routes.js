const express = require('express');
const router = express.Router();
const edusync = require('../crud');

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.patch('/atualizar/:nome/:id', function(req, res) {
    edusync.atualizar(req.params.nome, req.params.id)
        .then(function() {
            res.send('O nome do aluno foi atualizado com sucesso!');
        })
        .catch(function(erro) {
            res.status(500).send('Erro ao atualizar o aluno: ' + erro);
        });
});

router.post('/inserir/:nome/:cpf/:email/:telefone/:telefone2/:mae/:pai/:endereco', function(req, res) {
    edusync.inserir(
        req.params.nome,
        req.params.cpf,
        req.params.email,
        req.params.telefone,
        req.params.telefone2,
        req.params.mae,
        req.params.pai,
        req.params.endereco
    )
    .then(function() {
        res.status(201).send('Aluno inserido com sucesso!');
    })
    .catch(function(erro) {
        res.status(500).send('Erro ao inserir o aluno: ' + erro);
    });
});

router.get('/consultar/alunos', async function(req, res) {
    
    edusync.consultar()
        .then(function(resultado) {
            res.status(200).json(resultado);
        })
        .catch(function(erro) {
            res.status(500).send('Erro ao consultar a tabela: ' + erro);
        });
});

router.delete('/deletar/:nomeAlu', function(req, res) {
    edusync.deletar(req.params.nomeAlu)
        .then(function() {
            res.status(200).send('Registro deletado com sucesso!');
        })
        .catch(function(erro) {
            res.status(500).send('Erro ao deletar o registro: ' + erro);
        });
});

module.exports = router;
