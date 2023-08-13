/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addColumn('Users', 'RoleId', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Roles'
        },
        key: 'id'
      },
      allowNull: true
    })

    queryInterface.addColumn('Users', 'LoginTokenId', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'LoginTokens'
        },
        key: 'id'
      },
      allowNull: true
    })
  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeColumn('Users', 'RoleId')
    queryInterface.removeColumn('Users', 'LoginToken')
  }
};
