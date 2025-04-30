class UsuarioDTO {
    constructor({ nome, cpf, email, telefone, telefone2, senha, confirmarSenha, tipoUsuario, dataNascimento }) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.telefone2 = telefone2;
        this.senha = senha;
        this.confirmarSenha = confirmarSenha;
        this.tipoUsuario = tipoUsuario;
        this.dataNascimento = dataNascimento;
    }
}
module.exports = UsuarioDTO;
