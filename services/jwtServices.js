const jwt = require('jsonwebtoken');

const ACESS_SECRET = process.env.ACESS_SECRET;   
const REFRESH_SECRET = process.env.REFRESH_SECRET; 
const EXPIRES_IN = process.env.EXPIRES_IN 
const EXPIRES_IN_REFRESH = process.env.EXPIRES_IN_REFRESH

function gerarAcessToken(dadosUsuario) {
    return jwt.sign(dadosUsuario, ACESS_SECRET, { EXPIRES_IN });
}

function gerarRefreshToken(dadosUsuario) {
    return jwt.sign(dadosUsuario, REFRESH_SECRET, { EXPIRES_IN_REFRESH });
}

function verificarAcessToken(token) {
    try {
        return jwt.verify(token, ACESS_SECRET);
    } catch (error) {
        console.error("Access Token inválido:", error.message);
        return null;
    }
}

function verficarRefreshToken(token) {
    try {
        return jwt.verify(token, REFRESH_SECRET);
    } catch (error) {
        console.error("Refresh Token inválido:", error.message);
        return null;
    }
}

module.exports = {
    gerarAcessToken,
    gerarRefreshToken,
    verificarAcessToken,
    verficarRefreshToken
};
