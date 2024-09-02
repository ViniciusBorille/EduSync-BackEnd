const express = require('express');
const router = express.Router()
const curso = require('../crud')

router.get('/', (req,res) => {
    res.send('Hello World')
})

router.patch('/atualizar/:duracao/:id', function(req,res){
    curso.atualizar(req.params.duracao,req.params.id)
    .then(function(){
        res.send('A duração foi atualizada com sucesso!')
    }).catch(function(erro){
        res.send('Deu ruim '+erro)
    })
})

router.post('/inserir/:nome/:cpf/:nasc/:turma', function(req, res) {
        curso.inserir( req.params.nome,  req.params.cpf,  req.params.nasc,  req.params.turma)
        .then(function(){
            res.status(201).send('Estudante inserido com sucesso!');
        }).catch( function(erro) {
        console.error('Erro ao inserir estudante:', erro);
        res.status(500).send('Erro ao inserir estudante.');
    })
})

module.exports = router;