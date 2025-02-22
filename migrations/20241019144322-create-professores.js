'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('professores', {
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
      nome_pro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf_pro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email_pro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefone_pro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefone2_pro: {
        type: Sequelize.STRING
      },
      endereco_pro: {
        type: Sequelize.STRING // Corrigido para STRING, já que é um endereço
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
    await queryInterface.dropTable('professores');
  }
};
