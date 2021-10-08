'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('stockProducts', [
      { product_name: 'iPhone 13 Pink 512GB', available_quantity: 25, cost_of_goods_sold: 1000, SKU: 'IP13P', category: 'HandPhone', createdAt: new Date, updatedAt: new Date }, //1 || 1200
      { product_name: 'iPhone 13 Blue 512GB', available_quantity: 25, cost_of_goods_sold: 1000, SKU: 'IP13B', category: 'HandPhone', createdAt: new Date, updatedAt: new Date }, //2 || 1200
      { product_name: 'iPhone 13 Midnight 512GB', available_quantity: 25, cost_of_goods_sold: 1000, SKU: 'IP13M', category: 'HandPhone', createdAt: new Date, updatedAt: new Date }, //3 || 1200
      { product_name: 'iPhone 13 Stralight 512GB', available_quantity: 25, cost_of_goods_sold: 1000, SKU: 'IP13S', category: 'HandPhone', createdAt: new Date, updatedAt: new Date }, //4 || 1200
      { product_name: 'iPhone 13 RED 512GB', available_quantity: 25, cost_of_goods_sold: 1000, SKU: 'IP13R', category: 'HandPhone', createdAt: new Date, updatedAt: new Date }, //5 || 1200
      { product_name: 'iPhone 13 HARD CASE', available_quantity: 100, cost_of_goods_sold: 70, SKU: 'IP13HC', category: 'Case', createdAt: new Date, updatedAt: new Date }, //6 || 100
      { product_name: 'iPhone 13 SOFT CASE', available_quantity: 100, cost_of_goods_sold: 70, SKU: 'IP13SC', category: 'Case', createdAt: new Date, updatedAt: new Date }, //7 || 100
      { product_name: 'AirPods', available_quantity: 50, cost_of_goods_sold: 100, SKU: 'AP', category: 'EarPhone', createdAt: new Date, updatedAt: new Date }, //8 || 100
      { product_name: 'AirPods Pro', available_quantity: 50, cost_of_goods_sold: 200, SKU: 'AP-P', category: 'EarPhone', createdAt: new Date, updatedAt: new Date }, //9 || 300
      { product_name: 'AirPods Max', available_quantity: 50, cost_of_goods_sold: 250, SKU: 'AP-M', category: 'HeadPhone', createdAt: new Date, updatedAt: new Date } //10 || 350
    ], {})
 },

 down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('stockProducts', null, {})
 }
};
