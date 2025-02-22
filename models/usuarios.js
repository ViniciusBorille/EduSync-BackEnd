'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  Usuarios.init({
    id_usu: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    login_usu: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senha_usu: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo_usu: {
      type: DataTypes.STRING,
      allowNull: false
    },

  }, {
    sequelize,
    modelName: 'Usuarios',
    tableName: 'usuarios',
    timestamps: true,
  });

  return Usuarios;
};

