const db = require('./cnx');

const atualizar = async function(nomeNovo,idCurso){
    await db.connect()
    const troca="UPDATE cursos SET nome_cur= $1 WHERE id_cur = $2"
    await db.query(troca, [nomeNovo, idCurso])
}
const inserir = async function(nomeEst,cpfEst,dataNasc,turmaId){
    await db.connect()
    const insere="INSERT INTO estudantes(nome_est,cpf_est,data_nasc_est,turma_id) VALUES ( $1 , $2 , $3 , $4 )"
    await db.query(insere, [nomeEst, cpfEst, dataNasc, turmaId])
}
const consultar = async function() {
    await db.connect(); 
    const consulta = 'SELECT id_dis, nome_dis, carga_horaria_dis, curso_id, Cursos.nome_cur FROM disciplinas INNER JOIN cursos ON curso_id = id_cur';
    const resultado = await db.query(consulta);
    return resultado.rows; 
};
const deletar = async function(tabela, coluna, condicao){
    await db.connect()
    const deleta = `DELETE FROM ${tabela} WHERE ${coluna} < $1 `;
    await db.query (deleta, [condicao]);
}
module.exports = {atualizar, inserir, consultar, deletar}