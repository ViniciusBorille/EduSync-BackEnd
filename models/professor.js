'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    static associate(models) {
      Professor.belongsTo(models.Usuario, { foreignKey: 'usuario_id', onDelete: 'CASCADE' });
      Professor.belongsToMany(models.Turma, { through: models.ProfessorTurmaDisciplina, foreignKey: 'professor_id' });
    }
  }

  Professor.init({
    usuario_id: { type: DataTypes.INTEGER, unique: true, allowNull: false },
    formacao: { type: DataTypes.STRING(255), allowNull: false },
    ativo: { type: DataTypes.BOOLEAN, defaultValue: true }
  }, {
    sequelize,
    modelName: 'Professor',
    tableName: 'professores',
    underscored: true
  });

  return Professor;
};
