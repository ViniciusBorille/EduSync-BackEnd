const express = require('express');
const router = express.Router();
const Alunos=require('../crudAluno')
const Usuarios=require('../crudUsuario')

router.post('/cadusuario', async (req, res) => {
  try {
    console.log('Dados recebidos no backend:', req.body);
    const { 
        nome,
        sobrenome,
        email,
        senha,
        telefone,
        telefone2,
        data_nascimento,
        tipo_usuario,
     } = req.body;

    if (!nome || !sobrenome || !email || !senha || !tipo_usuario ) {
      return res.status(400).json({ mensagem: 'Campos obrigatórios não fornecidos' });
    }

    const usuario = await Usuarios.insereUsuario({ nome, sobrenome, email, senha, telefone, telefone2, data_nascimento, tipo_usuario });
    res.status(201).json({ mensagem: 'Usuário criado com sucesso!', usuario });
  } catch (error) {
    console.error('Erro interno do servidor:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor', erro: error.message });
  }
});


router.delete('/deletausuario/:id', (req,res)=>{
    Usuarios.deletaUsuario(req.params.id)
    .then(()=>{
        res.send('Usuário deletado com sucesso!')
    }).catch((erro)=>{
        res.send('Erro ao deletar o usuário! '+erro)
    })
})

router.get('/buscausuario', (req, res) => {
    Usuarios.buscaTodosUsuarios()
        .then((usuarios) => {
            res.json(usuarios);
        })
        .catch((erro) => {
            console.error('Erro ao buscar usuários:', erro);
            res.status(500).send('Erro ao buscar usuários: ' + erro.message);
        });
});


router.patch('/atualizausuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { login, senha, tipo } = req.body;

        if (!login || !senha || !tipo) {
            return res.status(400).json({ mensagem: 'Campos obrigatórios não fornecidos: login, senha ou tipo' });
        }

        const usuarioAtualizado = await Usuarios.alteraUsuario(id, { login, senha, tipo });

        if (!usuarioAtualizado) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        res.status(200).json({ mensagem: 'Usuário atualizado com sucesso!', usuario: usuarioAtualizado });
    } catch (erro) {
        console.error('Erro ao atualizar usuário:', erro.message);
        res.status(500).json({ mensagem: 'Erro ao atualizar usuário', erro: erro.message });
    }
});



router.post('/cadaluno/:id/:nome/:cpf/:email/:tel/:tel2/:mae/:pai/:endereco', (req,res)=>{
    Alunos.insereAluno(req.params.id,req.params.nome,req.params.cpf,req.params.email,req.params.tel,req.params.tel2,req.params.mae,req.params.pai,req.params.endereco)
    .then(()=>{
        res.send('Alunos cadastrado com sucesso!')
    }).catch((erro)=>{
        res.send('Não inseriu '+erro)
    })
})

router.get('/buscaaluno/:id', (req,res)=>{
    const alunoId = parseInt(req.params.id)
    Alunos.buscaAlunoPorId(alunoId)
    .then((aluno)=>{
        res.send(aluno)
    }).catch((erro)=>{
        res.send('Aluno não encontrado '+erro)
    })
})

router.patch('/alteraaluno/:id/:nome/:cpf/:email/:tel/:tel2/:mae/:pai/:endereco', (req,res)=>{
    Alunos.alteraAluno(req.params.id,req.params.nome,req.params.cpf,req.params.email,req.params.tel,req.params.tel2,req.params.mae,req.params.pai,req.params.endereco)
    .then(()=>{
        res.send('Alunos alaterado com sucesso!')
    }).catch((erro)=>{
        res.send('Não atualizou '+erro)
    })
})

router.delete('/deletaaluno/:id', (req,res)=>{
    Alunos.deletaAluno(req.params.id)
    .then(()=>{
        res.send('Aluno deletado com sucesso!')
    }).catch((erro)=>{
        res.send('Erro ao deletar o aluno! '+erro)
    })
})

module.exports = router;
