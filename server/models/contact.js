export default (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please enter the contact's name"
      }
    },
    title: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
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
  Contact.associate = (models) => {
    Contact.belongsTo(models.Account, {
      foreignKey: 'accountId',
      onDelete: 'CASCADE'
    });
  };
  return Contact;
};
