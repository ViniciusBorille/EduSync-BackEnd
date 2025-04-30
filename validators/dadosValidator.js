// Validações de Entrada de Dados
// Arquivo: validators/dadosValidator.js

// Verifica se o nome é válido: apenas letras e espaços, até 50 caracteres
function validaNome(nome) {
    try {
        if (typeof nome !== 'string' || nome.trim() === '' || nome.length > 50) return false;
        const regex = /^[A-Za-zÀ-ÿ\s]+$/;
        return regex.test(nome.trim());
    } catch (error) {
        console.error('Erro em validaNome:', error);
        return false;
    }
}

// Verifica se o CPF possui 11 dígitos numéricos
function validaCPF(cpf) {
    try {
        if (typeof cpf !== 'string') return false;
        const cpfLimpo = cpf.replace(/\D/g, '');
        return /^\d{11}$/.test(cpfLimpo);
    } catch (error) {
        console.error('Erro em validaCPF:', error);
        return false;
    }
}

// Verifica formato básico de e-mail
function validaEmail(email) {
    try {
        if (typeof email !== 'string' || email.trim() === '') return false;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email.trim());
    } catch (error) {
        console.error('Erro em validaEmail:', error);
        return false;
    }
}

// Verifica se o telefone tem 10 ou 11 dígitos
function validaTelefone(telefone) {
    try {
        if (typeof telefone !== 'string') return false;
        const tel = telefone.replace(/\D/g, '');
        return tel.length === 10 || tel.length === 11;
    } catch (error) {
        console.error('Erro em validaTelefone:', error);
        return false;
    }
}

// Verifica se a senha é válida (entre 8 e 24 caracteres)
function validaSenha(senha) {
    try {
        if (typeof senha !== 'string' || senha.trim() === '') return false;
        return senha.length >= 8 && senha.length <= 24;
    } catch (error) {
        console.error('Erro em validaSenha:', error);
        return false;
    }
}

// Verifica se senha e confirmação de senha são iguais
function validaConfirmarSenha(senha, confirmarSenha) {
    try {
        return validaSenha(senha) && senha === confirmarSenha;
    } catch (error) {
        console.error('Erro em validaConfirmarSenha:', error);
        return false;
    }
}

// Verifica se tipo de usuário é permitido
function validaTipoUsuario(tipoUsuario) {
    try {
        const tiposPermitidos = ['aluno', 'funcionario', 'professor', 'responsavel'];
        return tiposPermitidos.includes(tipoUsuario);
    } catch (error) {
        console.error('Erro em validaTipoUsuario:', error);
        return false;
    }
}

// Verifica se a data de nascimento é válida e não futura
function validaDataNascimento(dataNascimento) {
    try {
        const data = new Date(dataNascimento);
        const hoje = new Date();
        return !isNaN(data.getTime()) && data <= hoje;
    } catch (error) {
        console.error('Erro em validaDataNascimento:', error);
        return false;
    }
}

// Validação Global de Usuário
function validaUsuario({
    nome,
    cpf,
    email,
    telefone,
    telefone2,
    senha,
    confirmarSenha,
    tipoUsuario,
    dataNascimento
}) {
    try {
        return (
            validaNome(nome) &&
            validaCPF(cpf) &&
            validaEmail(email) &&
            validaTelefone(telefone) &&
            validaTelefone(telefone2) &&
            validaSenha(senha) &&
            validaConfirmarSenha(senha, confirmarSenha) &&
            validaTipoUsuario(tipoUsuario) &&
            validaDataNascimento(dataNascimento)
        );
    } catch (error) {
        console.error('Erro em validaUsuario:', error);
        return false;
    }
}

module.exports = {
    validaNome,
    validaCPF,
    validaEmail,
    validaTelefone,
    validaSenha,
    validaConfirmarSenha,
    validaTipoUsuario,
    validaDataNascimento,
    validaUsuario
};
