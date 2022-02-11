const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.URL_PROD || `postgres://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.URI_DB}:5432/${process.env.DATABSE_DB}`);

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}
