'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('invoices', [
      {date: new Date, recipient_id: 1, createdAt: new Date, updatedAt: new Date },
      {date: new Date, recipient_id: 2, createdAt: new Date, updatedAt: new Date },
      {date: new Date, recipient_id: 3, createdAt: new Date, updatedAt: new Date },
      {date: new Date, recipient_id: 4, createdAt: new Date, updatedAt: new Date },
      {date: new Date, recipient_id: 5, createdAt: new Date, updatedAt: new Date },
      {date: new Date, recipient_id: 1, createdAt: new Date, updatedAt: new Date },
      {date: new Date, recipient_id: 2, createdAt: new Date, updatedAt: new Date },
      {date: new Date, recipient_id: 3, createdAt: new Date, updatedAt: new Date }
    ], {})
 },

 down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('invoices', null, {})
 }
};
