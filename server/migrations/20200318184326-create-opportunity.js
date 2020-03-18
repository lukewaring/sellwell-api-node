module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Opportunities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      open_date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      close_date: {
        type: Sequelize.DATEONLY
      },
      stage: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.INTEGER
      },
      priority: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      },
      accountId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Accounts',
          key: 'id',
          as: 'accountId'
        }
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
  down: queryInterface /* , Sequelize */ =>  queryInterface.dropTable('Opportunities')
};
