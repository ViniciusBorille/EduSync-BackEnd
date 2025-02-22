'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Alunos extends Model {
    static associate(models) {
      Alunos.belongsTo(models.Usuarios, {
        foreignKey: 'usuarioId',
        as: 'usuario'
      });
    }
  }
  
  Alunos.init({
    id_usu: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nome_alu: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cpf_alu: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email_alu: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone_alu: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone2_alu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mae_alu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pai_alu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endereco_alu: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Alunos',
    tableName: 'alunos',
    timestamps: true,
  });
  
  return Alunos;
};
