'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      recipient.hasMany( models.invoice, {foreignKey: 'recipient_id'})
    }
  };
  recipient.init({
    name_of_recipient: DataTypes.STRING,
    name_of_company: DataTypes.STRING,
    status: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'recipient',
  });
  return recipient;
};