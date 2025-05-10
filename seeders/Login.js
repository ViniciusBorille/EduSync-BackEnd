const db = require('../models');
const bcrypt = require("bcryptjs");
const { gerarAccessToken, gerarRefreshToken, verficarRefreshToken } = require('../services/jwtServices');

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

        const payload = {
            id: usuario.id,
            tipo_usuario: usuario.tipo_usuario,
            email: usuario.email
        }
        const accessToken = gerarAcessToken(payload)
        const refreshToken = gerarRefreshToken(payload)

        return {
            mensagem: 'Login realizado com sucesso.',
            accessToken,
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
},

const refresh = async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) throw new HttpError(400, "Refresh token não enviado")
    const decoded = verificarRefreshToken(refreshToken)

    const usuario = await usuario.findUnique({
        where: { id: decoded.id }
    });
    if(!usuario || usuario.refreshToken !== refreshToken){
        throw new HttpError(403,"Refresh token inválido.")
    }
    const payload = {
        id: usuario.id,
        tipo_usuario: usuario.tipo_usuario,
        email: usuario.email
    }
    const novoAccessToken = gerarAcessToken(payload)

    res.json({ accesToken: novoAccessToken })
},

const logout = async (req, res) => {
    const { refreshToken } = req.body;
    const decoded = verficarRefreshToken(refreshToken)
    await usuario.update({
        where: { id: decoded.id },
        data: { refreshToken: null }
    });
    res.json({ mensagem: "Logout efetuado com sucesso."})
}
module.exports = {
    loginUsuario,
    refresh,
    logout
}