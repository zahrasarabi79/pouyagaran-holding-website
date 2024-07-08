
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({ database: 'pgs_website', username: 'root', dialectModule: require('mysql2'), password: '102030', host: 'localhost', dialect: 'mysql', benchmark: true });
(async () => {
  try {
    await sequelize.authenticate();
    console.log('connect successfully');
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error('unable connect :', error);
  }
})();

export default sequelize;
