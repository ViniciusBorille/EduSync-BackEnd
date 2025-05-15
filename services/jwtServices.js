const jwt = require('jsonwebtoken');

const ACCESS_SECRET = process.env.ACCESS_SECRET;   
const REFRESH_SECRET = process.env.REFRESH_SECRET; 
const EXPIRES_IN = process.env.EXPIRES_IN 
const EXPIRES_IN_REFRESH = process.env.EXPIRES_IN_REFRESH

function gerarAccessToken(payload) {
    return jwt.sign(payload, ACCESS_SECRET, { EXPIRES_IN });
}

function gerarRefreshToken(payload) {
    return jwt.sign(payload, REFRESH_SECRET, { EXPIRES_IN_REFRESH });
}

function verificarAccessToken(token) {
    try {
        return jwt.verify(token, ACCESS_SECRET);
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
    gerarAccessToken,
    gerarRefreshToken,
    verificarAccessToken,
    verficarRefreshToken
};
