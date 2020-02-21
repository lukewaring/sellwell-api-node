export default (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the name of the account'
      }
    },
    industry: {
      type: DataTypes.STRING,
      allowNull: {
        args: true
      }
    },
    website: {
      type: DataTypes.STRING,
      allowNull: {
        args: true
      }
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: {
        args: true
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId',
      }
    }
  }, {});
  Account.associate = (models) => {
    Account.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return Account;
};
