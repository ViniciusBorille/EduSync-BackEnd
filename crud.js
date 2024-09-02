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

module.exports = {atualizar, inserir}