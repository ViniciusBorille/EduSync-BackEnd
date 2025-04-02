const db = require('../models');
const bcrypt = require("bcryptjs");

const insereUsuario = async ({ nome, sobrenome, cpf, email, senha, telefone, telefone2, data_nascimento, tipo_usuario }) => {
    try {
        if (!nome || !sobrenome || !cpf || !email || !senha || !tipo_usuario ) {
            throw new Error('Campos obrigatórios não fornecidos!');
        }

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
        console.error('Erro ao inserir usuário:', error.message);

        if (error.name === 'SequelizeUniqueConstraintError') {
            throw new Error('Usuário já existe');
        }

        throw new Error('Erro ao inserir usuário');
    }
};


const deletaUsuario = async (usuarioId) => {
    try {
        const resultado = await usuario.Usuarios.destroy({
            where: {
                id_usu: usuarioId,
            },
        });
        if (resultado === 0) {
            throw new Error('Usuário não encontrado');
        }
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        throw new Error('Erro ao deletar usuário');
    }
};

const buscaTodosUsuarios = async () => {
    try {
        const usuarios = await db.Usuarios.findAll();
        return usuarios;
    } catch (error) {
        console.error('Erro ao buscar todos os usuários:', error);
        throw new Error('Erro ao buscar todos os usuários');
    }
};

const alteraUsuario = async (id, { login, senha, tipo }) => {
    try {
        const [updatedRows] = await db.Usuarios.update(
            { login_usu: login, senha_usu: senha, tipo_usu: tipo },
            { where: { id_usu: id } }
        );

        if (updatedRows === 0) {
            return null;
        }

        const usuarioAtualizado = await db.Usuarios.findOne({ where: { id_usu: id } });
        return usuarioAtualizado;
    } catch (error) {
        console.error('Erro ao atualizar usuário no banco:', error);
        throw error;
    }
};


module.exports = {
    insereUsuario,
    deletaUsuario,
    buscaTodosUsuarios,
    alteraUsuario,
};
