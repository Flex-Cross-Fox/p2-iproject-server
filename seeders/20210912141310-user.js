'use strict';
const { hashPass } = require('../helpers/bcrypt')
module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('users', [
    { name: 'albert', email: 'albert@gmail.com', password: hashPass('123465'), role: 'admin', createdAt: new Date, updatedAt: new Date },
    { name: 'aristo', email: 'aristo@gmail.com', password: hashPass('123465'), role: 'admin', createdAt: new Date, updatedAt: new Date },
    { name: 'kwok', email: 'kwok@gmail.com', password: hashPass('123465'), role: 'sale', createdAt: new Date, updatedAt: new Date },
    { name: 'guo', email: 'guo@gmail.com', password: hashPass('123465'), role: 'sale', createdAt: new Date, updatedAt: new Date },
    { name: 'test', email: 'test@gmail.com', password: hashPass('123465'), role: 'sale', createdAt: new Date, updatedAt: new Date },
    { name: 'contoh', email: 'contoh@gmail.com', password: hashPass('123465'), role: 'sale', createdAt: new Date, updatedAt: new Date },
    { name: 'coba', email: 'coba@gmail.com', password: hashPass('123465'), role: 'manager', createdAt: new Date, updatedAt: new Date },
    { name: 'uji', email: 'uji@gmail.com', password: hashPass('123465'), role: 'manager', createdAt: new Date, updatedAt: new Date },
    { name: 'try', email: 'try@gmail.com', password: hashPass('123465'), role: 'accounting', createdAt: new Date, updatedAt: new Date },
    { name: 'test1', email: 'test1@gmail.com', password: hashPass('123465'), role: 'accounting', createdAt: new Date, updatedAt: new Date },
    { name: 'test2', email: 'test2@gmail.com', password: hashPass('123465'), role: 'bos', createdAt: new Date, updatedAt: new Date }
   ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
