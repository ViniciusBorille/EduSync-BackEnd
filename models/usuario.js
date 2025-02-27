'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasOne(models.Aluno, { foreignKey: 'usuario_id', onDelete: 'CASCADE' });
      Usuario.hasOne(models.Professor, { foreignKey: 'usuario_id', onDelete: 'CASCADE' });
      Usuario.hasOne(models.Funcionario, { foreignKey: 'usuario_id', onDelete: 'CASCADE' });
      Usuario.hasOne(models.Responsavel, { foreignKey: 'usuario_id', onDelete: 'CASCADE' });
    }
  }

  Usuario.init({
    nome: { type: DataTypes.STRING(30), allowNull: false },
    sobrenome: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    senha: { type: DataTypes.STRING(255), allowNull: false },
    telefone: DataTypes.STRING(20),
    telefone2: DataTypes.STRING(20),
    data_nascimento: DataTypes.DATE,
    tipo_usuario: {
      type: DataTypes.ENUM('aluno', 'professor', 'funcionario', 'responsavel'),
      allowNull: false
    },
    ativo: { type: DataTypes.BOOLEAN, defaultValue: true }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    underscored: true,
    timestamps: true
  });

  return Usuario;
};
