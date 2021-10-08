'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sales', [
      {item_id: 1, quantity: 5, discount: 0, total_discount: 0, after_discount: 1200, total: 6000, invoice_no: 4, createdAt: new Date, updatedAt: new Date }, //1200 O
      {item_id: 9, quantity: 1, discount: 15, total_discount: 45, after_discount: 255, total: 255, invoice_no: 4, createdAt: new Date, updatedAt: new Date },//300 O
      {item_id: 2, quantity: 1, discount: 2, total_discount: 24, after_discount: 1176, total: 2352, invoice_no: 5, createdAt: new Date, updatedAt: new Date }, //1200 O
      {item_id: 1, quantity: 1, discount: 20, total_discount: 240, after_discount: 960, total: 960, invoice_no: 5, createdAt: new Date, updatedAt: new Date }, //1200 O
      {item_id: 3, quantity: 1, discount: 0, total_discount: 0, after_discount: 1200, total: 1200, invoice_no: 6, createdAt: new Date, updatedAt: new Date }, //1200 O
      {item_id: 2, quantity: 2, discount: 1, total_discount: 12, after_discount: 1188, total: 2376, invoice_no: 6, createdAt: new Date, updatedAt: new Date }, //1200 O
      {item_id: 3, quantity: 2, discount: 1, total_discount: 12, after_discount: 1188, total: 2376, invoice_no: 7, createdAt: new Date, updatedAt: new Date }, //1200 O
      {item_id: 4, quantity: 2, discount: 1, total_discount: 12, after_discount: 1188, total: 2376, invoice_no: 7, createdAt: new Date, updatedAt: new Date }, //1200 O
      {item_id: 5, quantity: 3, discount: 0, total_discount: 0, after_discount: 1200, total: 3600, invoice_no: 8, createdAt: new Date, updatedAt: new Date }, //1200 O
      {item_id: 6, quantity: 4, discount: 10, total_discount: 10, after_discount: 90, total: 360, invoice_no: 9, createdAt: new Date, updatedAt: new Date }, //100 O
      {item_id: 7, quantity: 8, discount: 0, total_discount: 0, after_discount: 100, total: 800, invoice_no: 10, createdAt: new Date, updatedAt: new Date },//100 O
      {item_id: 8, quantity: 9, discount: 10, total_discount: 10, after_discount: 90, total: 810, invoice_no: 11, createdAt: new Date, updatedAt: new Date }//100 O
    ], {})
 },

 down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('sales', null, {})
 }
};
