const db=require('./models');
const Alunos = require('./models/alunos');

const insereAluno = async(id,nome,cpf,email,tel,tel2,mae,pai,end)=>{
    const novoAluno = await db.Alunos.create({
        id_usu: id,
        nome_alu: nome,
        cpf_alu: cpf,
        email_alu: email,
        telefone_alu: tel,
        telefone2_alu: tel2,
        mae_alu: mae,
        pai_alu: pai,
        endereco_alu: end
    })
}

const buscaAlunoPorId = async(alunoId)=>{
    const buscaAluno = await db.Alunos.findOne({
        where: {
            id_usu: alunoId
        },
    })
    return buscaAluno;
}

const alteraAluno = async (id,nome,cpf,email,tel,tel2,mae,pai,end) => {
    const alteraAluno = await db.Alunos.update({
        id_usu: id,
        nome_alu: nome,
        cpf_alu: cpf,
        email_alu: email,
        telefone_alu: tel,
        telefone2_alu: tel2,
        mae_alu: mae,
        pai_alu: pai,
        endereco_alu: end
    },
        {
            where: {
                id_usu: id
            }
        })
}

const deletaAluno = async (alunoId) => {
    const deletaAluno = await db.Alunos.destroy({
        where: {
            id_usu: alunoId
        }
    })
}

module.exports = {
    insereAluno,
    buscaAlunoPorId,
    alteraAluno,
    deletaAluno
}
