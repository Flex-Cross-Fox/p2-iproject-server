'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('user', [
    {name: 'albert', email: 'albert@gmail.com', password: '123465', role: 'admin'},
    {name: 'aristo', email: 'aristo@gmail.com', password: '123465', role: 'admin'},
    {name: 'kwok', email: 'kwok@gmail.com', password: '123465', role: 'sale'},
    {name: 'guo', email: 'guo@gmail.com', password: '123465', role: 'sale'},
    {name: 'test', email: 'test@gmail.com', password: '123465', role: 'sale'},
    {name: 'contoh', email: 'contoh@gmail.com', password: '123465', role: 'sale'},
    {name: 'coba', email: 'coba@gmail.com', password: '123465', role: 'manager'},
    {name: 'uji', email: 'uji@gmail.com', password: '123465', role: 'manager'},
    {name: 'try', email: 'try@gmail.com', password: '123465', role: 'accounting'},
    {name: 'test1', email: 'test1@gmail.com', password: '123465', role: 'accounting'},
    {name: 'test2', email: 'test2@gmail.com', password: '123465', role: 'bos'}
   ], {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('user', null, {})
  }
};
