function autorizar(...tiposPermitidos){
    return(req, res) => {
        const usuario = req.usuario;

        if(!usuario || !tiposPermitidos.includes(usuario.tipo)){
            res.status(401).json({ erro: 'Acesso  negado'});
            return;
        }

        next();
    }
}