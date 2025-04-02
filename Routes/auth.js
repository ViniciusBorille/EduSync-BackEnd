const jwt = require("jsonwebtoken");
require("dotenv").config();

// Rota de login
router.post("/login", async (req, res) => {
    const { cpf, senha } = req.body;

    try {
        // Busca o usuário no banco de dados pelo e-mail
        const user = await User.findOne({ where: { cpf } });

        if (!user) {
            return res.status(401).json({ message: "Usuário não encontrado" });
        }

        // Compara a senha fornecida com o hash armazenado
        const isMatch = await bcrypt.compare(senha, user.senha);

        if (!isMatch) {
            return res.status(401).json({ message: "Senha incorreta" });
        }

        // Gera um token JWT para autenticação
        const token = jwt.sign({ id: user.id, cpf: user.cpf }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        return res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Erro ao fazer login", error });
    }
});
