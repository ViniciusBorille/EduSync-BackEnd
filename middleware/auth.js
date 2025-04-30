const jwt = require('jsonwebtoken');

const SECRET = process.env.ACESS_SECRET;

function autenticar(req,res){
    const authHeader = req.headers.authorization;
    if(!authHeader){
        res.status(401).json({erro: 'Token não informado'});
        return;
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, SECRET);
        (req).usuario = decoded;
        next();
    } catch (error) {
        res.status(401).json({ erro: 'Token inválido ou expirado'});
        return;
    }
}

module.exports = {
    autenticar
}