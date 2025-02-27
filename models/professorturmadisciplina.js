'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProfessorTurmaDisciplina extends Model {
    static associate(models) {
      ProfessorTurmaDisciplina.belongsTo(models.Professor, { foreignKey: 'professor_id', onDelete: 'CASCADE' });
      ProfessorTurmaDisciplina.belongsTo(models.Turma, { foreignKey: 'turma_id', onDelete: 'CASCADE' });
      ProfessorTurmaDisciplina.belongsTo(models.Disciplina, { foreignKey: 'disciplina_id', onDelete: 'CASCADE' });
    }
  }

  ProfessorTurmaDisciplina.init({}, {
    sequelize,
    modelName: 'ProfessorTurmaDisciplina',
    tableName: 'professor_turma_disciplina',
    underscored: true
  });

  return ProfessorTurmaDisciplina;
};
