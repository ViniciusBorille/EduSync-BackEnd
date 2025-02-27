'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Turma extends Model {
    static associate(models) {
      Turma.belongsTo(models.Professor, { foreignKey: 'professor_id', onDelete: 'SET NULL' });
      Turma.belongsToMany(models.Disciplina, { through: models.TurmaDisciplinas, foreignKey: 'turma_id' });
      Turma.belongsToMany(models.Aluno, { through: models.Matricula, foreignKey: 'turma_id' });
    }
  }

  Turma.init({
    nome: { type: DataTypes.STRING(50), allowNull: false },
    ano_letivo: { type: DataTypes.INTEGER, allowNull: false },
    nivel_escolar: { type: DataTypes.STRING(50), allowNull: false },
    professor_id: { type: DataTypes.INTEGER, allowNull: true }
  }, {
    sequelize,
    modelName: 'Turma',
    tableName: 'turmas',
    underscored: true
  });

  return Turma;
};
