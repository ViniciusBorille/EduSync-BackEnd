'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Funcionario extends Model {
    static associate(models) {
      Funcionario.belongsTo(models.Usuario, { foreignKey: 'usuario_id', onDelete: 'CASCADE' });
    }
  }

  Funcionario.init({
    usuario_id: { type: DataTypes.INTEGER, unique: true, allowNull: false },
    cargo: { type: DataTypes.STRING(100), allowNull: false },
    setor: { type: DataTypes.STRING(100), allowNull: false },
    ativo: { type: DataTypes.BOOLEAN, defaultValue: true }
  }, {
    sequelize,
    modelName: 'Funcionario',
    tableName: 'funcionarios',
    underscored: true
  });

  return Funcionario;
};
