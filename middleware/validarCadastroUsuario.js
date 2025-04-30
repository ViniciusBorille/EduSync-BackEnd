const { validaUsuario } = require('../validators/dadosValidator');

function validarCadastroUsuario(req, res, next) {
    const dadosUsuario = req.body;
    if (!validaUsuario(dadosUsuario)) {
        return res.status(400).json({ erro: 'Dados inválidos!' });
    }
    next();
}

module.exports = validarCadastroUsuario;
