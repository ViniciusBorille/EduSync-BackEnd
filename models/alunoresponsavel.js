'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AlunoResponsavel extends Model {}

  AlunoResponsavel.init({}, {
    sequelize,
    modelName: 'AlunoResponsavel',
    tableName: 'aluno_responsavel',
    underscored: true
  });

  return AlunoResponsavel;
};
