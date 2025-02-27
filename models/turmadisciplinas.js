'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TurmaDisciplinas extends Model {}

  TurmaDisciplinas.init({}, {
    sequelize,
    modelName: 'TurmaDisciplinas',
    tableName: 'turma_disciplinas',
    underscored: true
  });

  return TurmaDisciplinas;
};
