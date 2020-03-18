export default (sequelize, DataTypes) => {
  const Opportunity = sequelize.define('Opportunity', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please enter the opportunity's name"
      }
    },
    open_date: {
      type: DataTypes.DATEONLY,
      allowNull: {
        args: false,
        msg: "Please enter the open date"
      }
    },
    close_date: DataTypes.DATEONLY,
    stage: DataTypes.STRING,
    value: DataTypes.INTEGER,
    priority: DataTypes.STRING,
    notes: DataTypes.STRING,
    accountId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Account',
        key: 'id',
        as: 'accountId'
      }
    }
  }, {});
  Opportunity.associate = function(models) {
    Opportunity.belongsTo(models.Account, {
      foreignKey: 'accountId',
      onDelete: 'CASCADE'
    });

    Opportunity.hasMany(models.Activity, {
      foreignKey: 'opportunityId',
      onDelete: 'CASCADE'
    });
  };
  return Opportunity;
};
