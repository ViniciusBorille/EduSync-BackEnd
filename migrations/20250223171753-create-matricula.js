'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        references: { model: 'alunos', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false
      },
      turma_id: {
        type: Sequelize.INTEGER,
        references: { model: 'turmas', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false
      },
      data_matricula: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM('ativa', 'inativa'),
        defaultValue: 'ativa',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('matriculas');
  }
};