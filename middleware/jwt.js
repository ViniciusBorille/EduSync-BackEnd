const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const chaveSecreta = process.env.secretkey;

function gerarTokenJwt(dadosUsuario){
    return jwt.sign(dadosUsuario, chaveSecreta, {expiresIn: '1h'});
};

function verificarTokenJwt(token){
    try {
        return jwt.verify(token, chaveSecreta);
    } catch (error) {
        console.error("Erro ao validar token", (error).message);
        return null;
    }
};

const dadosUsuarioAutenticado = {
    id: 12,
    nome: 'Vinicius'
}

const tokenJwt = gerarTokenJwt(dadosUsuarioAutenticado);

console.log("Token JWT gerado", tokenJwt);

const tokenRecebido = tokenJwt;

const dadosVerificados = verificarTokenJwt(tokenRecebido);

if(dadosVerificados){
    console.log('Token JWT válido', dadosVerificados);
} else {
    console.log('Token JWT inválido');
}