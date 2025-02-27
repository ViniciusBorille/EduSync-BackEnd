'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    static associate(models) {
      Matricula.belongsTo(models.Aluno, { foreignKey: 'aluno_id', onDelete: 'CASCADE' });
      Matricula.belongsTo(models.Turma, { foreignKey: 'turma_id', onDelete: 'CASCADE' });
    }
  }

  Matricula.init({
    aluno_id: { type: DataTypes.INTEGER, allowNull: false },
    turma_id: { type: DataTypes.INTEGER, allowNull: false },
    data_matricula: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    status: {
      type: DataTypes.ENUM('ativa', 'inativa'),
      allowNull: false,
      defaultValue: 'ativa'
    }
  }, {
    sequelize,
    modelName: 'Matricula',
    tableName: 'matriculas',
    underscored: true
  });

  return Matricula;
};
