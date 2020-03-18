export default (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please enter the activity's name"
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: {
        args: false,
        msg: "Please enter the activity's date"
      }
    },
    notes: DataTypes.STRING,
    opportunityId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Opportunity',
        key: 'id',
        as: 'opportunityId'
      }
    }
  }, {});
  Activity.associate = (models) => {
    Activity.belongsTo(models.Opportunity, {
      foreignKey: 'opportunityId',
      onDelete: 'CASCADE'
    });
  };
  return Activity;
};
