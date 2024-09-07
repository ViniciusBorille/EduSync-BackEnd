const db = require('./cnx');

const atualizar = async function(nomeNovo, idAluno){
    await db.connect();
    const troca = "UPDATE alunos SET nome_alu = $1 WHERE id_alu = $2";
    await db.query(troca, [nomeNovo, idAluno]);
};

const inserir = async function(nomeAlu, cpfAlu, emailAlu, telefoneAlu, telefone2Alu, maeAlu, paiAlu, enderecoAlu){
    await db.connect();
    const insere = `
        INSERT INTO alunos(nome_alu, cpf_alu, email_alu, telefone_alu, telefone2_alu, mae_alu, pai_alu, endereco_alu) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `;
    await db.query(insere, [nomeAlu, cpfAlu, emailAlu, telefoneAlu, telefone2Alu, maeAlu, paiAlu, enderecoAlu]);
};

const consultar = async function() {
    await db.connect();
    const consulta = `SELECT * FROM alunos`;
    const resultado = await db.query(consulta);
    return resultado.rows;
};

const deletar = async function(nomAlu){
    await db.connect();
    const deleta = `DELETE FROM alunos WHERE nome_alu = $1 `;
    await db.query(deleta, [nomAlu]);
};

module.exports = { atualizar, inserir, consultar, deletar };
