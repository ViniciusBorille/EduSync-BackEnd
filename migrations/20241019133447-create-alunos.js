'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('alunos', {
      id_usu: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'id_usu',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      nome_alu: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cpf_alu: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email_alu: {
        allowNull: false,
        type: Sequelize.STRING
      },
      telefone_alu: {
        allowNull: false,
        type: Sequelize.STRING
      },
      telefone2_alu: {
        type: Sequelize.STRING
      },
      mae_alu: {
        type: Sequelize.STRING
      },
      pai_alu: {
        type: Sequelize.STRING
      },
      endereco_alu: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('alunos');
  }
};
