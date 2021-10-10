'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sale.belongsTo( models.stockProduct, { foreignKey: 'item_id'})
      sale.belongsTo( models.invoice, { foreignKey: 'invoice_no'} )
    }
  };
  sale.init({
    item_id: DataTypes.NUMBER,
    quantity: DataTypes.NUMBER,
    discount: DataTypes.NUMBER,
    total_discount: DataTypes.NUMBER,
    after_discount: DataTypes.NUMBER,
    total: DataTypes.NUMBER,
    invoice_no: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'sale',
  });
  return sale;
};