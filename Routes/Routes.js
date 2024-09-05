const express = require('express');
const router = express.Router()
const edusync = require('../crud')

router.get('/', (req,res) => {
    res.send('Hello World')
})

router.patch('/atualizar/:duracao/:id', function(req,res){
    edusync.atualizar(req.params.duracao,req.params.id)
    .then(function(){
        res.send('A duração foi atualizada com sucesso!')
    }).catch(function(erro){
        res.send('Deu ruim '+erro)
    })
})

router.post('/inserir/:nome/:cpf/:nasc/:turma', function(req, res) {
        edusync.inserir( req.params.nome,  req.params.cpf,  req.params.nasc,  req.params.turma)
        .then(function(){
            res.status(201).send('Estudante inserido com sucesso!');
        }).catch( function(erro) {
        console.error('Erro ao inserir estudante:', erro);
        res.status(500).send('Erro ao inserir estudante.');
    })
})

router.get('/consultar', async function(req, res) {
    try {
        const disciplinas = await edusync.consultar(); 
        res.json(disciplinas); 
    } catch (erro) {
        console.error('Erro ao consultar disciplinas:', erro);
        res.status(500).send('Erro ao consultar disciplinas.'); 
    }
});

router.delete('/deletar/:tabela/:coluna/:condicao', async function(req, res){
        edusync.deletar(req.params.tabela, req.params.coluna, req.params.condicao)
        .then(function(){
            res.status(204).send('Deletado com sucesso!')
        }).catch(function(erro){
            console.error('Erro ao deletar conteudo:', erro);
            res.status(500).send('Erro ao excluir condição');
        })
    
});
module.exports = router;