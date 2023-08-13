module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Roles', [
    {
      name: 'Executive Chef',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sous Chef',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'General Manager',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
  ], {}),
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', {[Sequelize.Op.or]: [
      {name: 'Executive Chef'}, 
      { name: 'Sous Chef' },
      {name: 'General Manager'}
    ]});
  }
};
