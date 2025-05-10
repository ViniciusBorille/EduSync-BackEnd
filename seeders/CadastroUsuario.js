const db = require('../models');
const bcrypt = require("bcryptjs");
const { validaUsuario } = require('../validators/dadosValidator')

const insereUsuario = async ({ nome, sobrenome, cpf, email, senha, telefone, telefone2, data_nascimento, tipo_usuario }) => {
    
    try {

        const hashSenha = await bcrypt.hash(senha, 10);

        const novoUsuario = await db.Usuario.create({
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf,
            email: email,
            senha: hashSenha,
            telefone: telefone,
            telefone2: telefone2,
            data_nascimento: data_nascimento,
            tipo_usuario: tipo_usuario,
        });

        console.log('Usuário criado com sucesso:', novoUsuario);
        return novoUsuario;
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Usuário já existe');
        }

        throw new Error('Erro ao inserir usuário');
    }
};


module.exports = {
    insereUsuario
};
