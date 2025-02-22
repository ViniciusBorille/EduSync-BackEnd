'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Professores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Professores.belongsTo(models.Usuarios, {
        foreignKey: 'id_pro',
        as: 'usuario'
      });
    }
  }

  Professores.init({
    nome_pro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cpf_pro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email_pro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone_pro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone2_pro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    endereco_pro: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Professores',
    tableName: 'professores',
    timestamps: true,
  });

  return Professores;
};
