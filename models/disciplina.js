'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Disciplina extends Model {
    static associate(models) {
      Disciplina.belongsToMany(models.Turma, { through: models.TurmaDisciplinas, foreignKey: 'disciplina_id' });
    }
  }

  Disciplina.init({
    nome: { type: DataTypes.STRING(255), unique: true, allowNull: false },
    descricao: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Disciplina',
    tableName: 'disciplinas',
    underscored: true
  });

  return Disciplina;
};
