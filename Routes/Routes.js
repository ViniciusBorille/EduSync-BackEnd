const express = require('express');
const router = express.Router();
const Usuarios=require('../seeders/CadastroUsuario')
const { loginUsuario } = require('../seeders/Login');


router.post('/cadusuario', async (req, res) => {
  try {
    console.log('Dados recebidos no backend:', req.body);
    const { 
        nome,
        sobrenome,
        cpf, 
        email,
        senha,
        telefone,
        telefone2,
        data_nascimento,
        tipo_usuario,
     } = req.body;

    if (!nome || !sobrenome || !cpf || !email || !senha || !tipo_usuario ) {
      return res.status(400).json({ mensagem: 'Campos obrigatórios não fornecidos' });
    }

    const usuario = await Usuarios.insereUsuario({ nome, sobrenome, cpf, email, senha, telefone, telefone2, data_nascimento, tipo_usuario });
    res.status(201).json({ mensagem: 'Usuário criado com sucesso!', usuario });
  } catch (error) {
    console.error('Erro interno do servidor:', error);
    res.status(500).json({ mensagem: 'Erro interno do servidor', erro: error.message });
  }
});

router.post('/login', async (req, res) => {
  console.log('Body recebido:', req.body);
    const { user, senha } = req.body;

    try {
        const { token } = await loginUsuario(user, senha);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
module.exports = router;
