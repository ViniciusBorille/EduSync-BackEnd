const { insereUsuario } = require('../services/usuarioService'); // ajuste conforme a estrutura
const db = require('../models');
const bcrypt = require('bcryptjs');
const { validaUsuario } = require('../validators/dadosValidator');

jest.mock('../models');
jest.mock('bcryptjs');
jest.mock('../validators/dadosValidator');

describe('Função insereUsuario', () => {
    const dadosValidos = {
        nome: 'Ana',
        sobrenome: 'Silva',
        cpf: '12345678900',
        email: 'ana@email.com',
        senha: 'senha123',
        telefone: '11999999999',
        telefone2: '11988888888',
        data_nascimento: '1990-01-01',
        tipo_usuario: 'comum'
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('deve criar um novo usuário com sucesso', async () => {
        validaUsuario.mockReturnValue(true);
        bcrypt.hash.mockResolvedValue('senhaHasheada');
        db.Usuario.create.mockResolvedValue({ id: 1, ...dadosValidos });

        const resultado = await insereUsuario(dadosValidos);

        expect(validaUsuario).not.toHaveBeenCalled(); // remover se reativar validação
        expect(bcrypt.hash).toHaveBeenCalledWith('senha123', 10);
        expect(db.Usuario.create).toHaveBeenCalledWith(expect.objectContaining({
            nome: 'Ana',
            senha: 'senhaHasheada'
        }));
        expect(resultado).toHaveProperty('id');
    });

    it('deve lançar erro de usuário já existente', async () => {
        bcrypt.hash.mockResolvedValue('senhaHasheada');
        db.Usuario.create.mockRejectedValue({ name: 'SequelizeUniqueConstraintError' });

        await expect(insereUsuario(dadosValidos))
            .rejects
            .toThrow('Usuário já existe');
    });

    it('deve lançar erro genérico ao inserir usuário', async () => {
        bcrypt.hash.mockResolvedValue('senhaHasheada');
        db.Usuario.create.mockRejectedValue(new Error('Falha de banco'));

        await expect(insereUsuario(dadosValidos))
            .rejects
            .toThrow('Erro ao inserir usuário');
    });

    // Caso a validação for reativada:
    // it('deve lançar erro se os dados forem inválidos', async () => {
    //     validaUsuario.mockReturnValue(false);
    //     await expect(insereUsuario(dadosValidos)).rejects.toThrow('Erro nos dados!');
    // });
});
