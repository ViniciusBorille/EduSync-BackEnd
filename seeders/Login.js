    const db = require('../models');
    const bcrypt = require("bcryptjs");

    const loginUsuario = async (user, senha) => {
        try {
            if (!user || !senha) {
                throw new Error('Email e senha são obrigatórios!');
            }
            console.log('Buscando usuário com:', user);

            const usuario = await db.Usuario.findOne({ where: { cpf: user } });

            console.log('Resultado da busca:', usuario);


            if (!usuario) {
                throw new Error('Usuário não encontrado!')
            }

            const senhaValida = await bcrypt.compare(senha, usuario.senha);

            if (!senhaValida) {
                throw new Error('Senha incorreta!');
            }

            return {
                mensagem: 'Login realizado com sucesso.',
                usuario: {
                    id: usuario.id,
                    nome: usuario.nome,
                    tipo_usuario: usuario.tipo_usuario,
                    email: usuario.email
                }
            };
        } catch (error) {
            throw new Error(`Erro no login: ${error.message}`);
        }
    }

    module.exports = {
        loginUsuario
    }