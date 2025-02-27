'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Responsavel extends Model {
    static associate(models) {
      Responsavel.belongsTo(models.Usuario, { foreignKey: 'usuario_id', onDelete: 'CASCADE' });
      Responsavel.belongsToMany(models.Aluno, { through: models.AlunoResponsavel, foreignKey: 'responsavel_id' });
    }
  }

  Responsavel.init({
    usuario_id: { type: DataTypes.INTEGER, unique: true, allowNull: false },
    parentesco: {
      type: DataTypes.ENUM('pai', 'mãe', 'tutor', 'outro'),
      allowNull: false
    },
    ativo: { type: DataTypes.BOOLEAN, defaultValue: true }
  }, {
    sequelize,
    modelName: 'Responsavel',
    tableName: 'responsaveis',
    underscored: true
  });

  return Responsavel;
};
