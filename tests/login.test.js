const { loginUsuario } = require('../services/authService'); // ajuste o caminho conforme sua estrutura
const db = require('../models');
const bcrypt = require('bcryptjs');

jest.mock('../models');
jest.mock('bcryptjs');

describe('Função loginUsuario', () => {
    const mockUsuario = {
        id: 1,
        nome: 'João Silva',
        tipo_usuario: 'admin',
        email: 'joao@email.com',
        senha: 'hashedPassword'
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('deve realizar o login com sucesso', async () => {
        db.Usuario.findOne.mockResolvedValue(mockUsuario);
        bcrypt.compare.mockResolvedValue(true);

        const resultado = await loginUsuario('12345678900', 'senha123');

        expect(db.Usuario.findOne).toHaveBeenCalledWith({ where: { cpf: '12345678900' } });
        expect(bcrypt.compare).toHaveBeenCalledWith('senha123', 'hashedPassword');

        expect(resultado).toEqual({
            mensagem: 'Login realizado com sucesso.',
            usuario: {
                id: mockUsuario.id,
                nome: mockUsuario.nome,
                tipo_usuario: mockUsuario.tipo_usuario,
                email: mockUsuario.email
            }
        });
    });

    it('deve lançar erro se o usuário não for encontrado', async () => {
        db.Usuario.findOne.mockResolvedValue(null);

        await expect(loginUsuario('00000000000', 'senha123'))
            .rejects
            .toThrow('Erro no login: Usuário não encontrado!');
    });

    it('deve lançar erro se a senha for inválida', async () => {
        db.Usuario.findOne.mockResolvedValue(mockUsuario);
        bcrypt.compare.mockResolvedValue(false);

        await expect(loginUsuario('12345678900', 'senhaErrada'))
            .rejects
            .toThrow('Erro no login: Senha incorreta!');
    });

    it('deve lançar erro se email ou senha estiverem vazios', async () => {
        await expect(loginUsuario('', ''))
            .rejects
            .toThrow('Erro no login: Email e senha são obrigatórios!');
    });
});
