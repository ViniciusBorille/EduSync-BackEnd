'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    static associate(models) {
      Aluno.belongsTo(models.Usuario, { foreignKey: 'usuario_id', onDelete: 'CASCADE' });
      Aluno.belongsToMany(models.Responsavel, { through: models.AlunoResponsavel, foreignKey: 'aluno_id' });
      Aluno.belongsToMany(models.Turma, { through: models.Matricula, foreignKey: 'aluno_id' });
    }
  }

  Aluno.init({
    usuario_id: { type: DataTypes.INTEGER, unique: true, allowNull: false },
    matricula: { type: DataTypes.STRING(20), unique: true, allowNull: false },
    nivel_escolar: { type: DataTypes.STRING(50), allowNull: false },
    ativo: { type: DataTypes.BOOLEAN, defaultValue: true }
  }, {
    sequelize,
    modelName: 'Aluno',
    tableName: 'alunos',
    underscored: true
  });

  return Aluno;
};
