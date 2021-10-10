'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stockProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      stockProduct.hasMany(models.sale, {foreignKey: 'item_id'})
    }
  };
  stockProduct.init({
    product_name: DataTypes.STRING,
    available_quantity: DataTypes.NUMBER,
    cost_of_goods_sold: DataTypes.NUMBER,
    SKU: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'stockProduct',
  });
  return stockProduct;
};