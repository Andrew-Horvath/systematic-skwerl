module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('LoginTokens', [
    {
      token: '2344asdkjhgTlsy89',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      token: 'aglksdfjTalsdkfjY78U9i',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
  ], {}),
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('LoginTokens', {[Sequelize.Op.or]: [
      { token: '2344asdkjhgTlsy89' },
      { token: 'aglksdfjTalsdkfjY78U9i' },
    ]});
  }
};
