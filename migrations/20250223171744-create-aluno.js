'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('alunos', {
      id: { 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true, 
        type: Sequelize.INTEGER 
      },
      usuario_id: { 
        type: Sequelize.INTEGER, 
        unique: true, 
        references: { model: 'usuarios', key: 'id' }, 
        onDelete: 'CASCADE' 
      },
      matricula: { 
        type: Sequelize.STRING(20), 
        allowNull: false, 
        unique: true 
      },
      nivel_escolar: { 
        type: Sequelize.STRING(50), 
        allowNull: false 
      },
      ativo: { 
        type: Sequelize.BOOLEAN, 
        defaultValue: true 
      },
      created_at: { 
        allowNull: false, 
        type: Sequelize.DATE, 
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') 
      },
      updated_at: { 
        allowNull: false, 
        type: Sequelize.DATE, 
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('alunos');
  }
};
