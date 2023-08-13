
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RolesPermissions', {
      RoleId: {
        type: Sequelize.INTEGER
      },
      PermissionId: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RolesPermissions');
  }
};