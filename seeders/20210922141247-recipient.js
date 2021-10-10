'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('recipients', [
      { name_of_recipient: 'hartono', name_of_company: 'DBS', status: 'manager', address: '12 Marina Boulevard,DBS Asia Central @ Marina Bay Financial Centre Tower 3,Singapore 018982', createdAt: new Date, updatedAt: new Date },
      { name_of_recipient: 'edi', name_of_company: 'OCBC NISP', status: 'marketing', address: 'Jl. Prof. Dr. Satrio Kav. 25 Jakarta 12940', createdAt: new Date, updatedAt: new Date },
      { name_of_recipient: 'albert', name_of_company: 'BNI', status: 'sale', address: 'Gedung Grha BNI Jl. Jenderal Sudirman Kav. 1. Jakarta Pusat 10220. Indonesia', createdAt: new Date, updatedAt: new Date },
      { name_of_recipient: 'tri', name_of_company: 'BRI', status: 'security', address: 'Gedung BRI 1 Jl. Jenderal Sudirman Kav.44-46 Jakarta 10210 Indonesia', createdAt: new Date, updatedAt: new Date },
      { name_of_recipient: 'eki', name_of_company: 'BCA', status: 'admin', address: 'Menara BCA, Grand Indonesia Jl. MH Thamrin No. 1 Jakarta 10310', createdAt: new Date, updatedAt: new Date }
     ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('recipients', null, {})
  }
};
