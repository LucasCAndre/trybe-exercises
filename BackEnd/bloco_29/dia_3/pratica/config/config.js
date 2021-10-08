require('dotenv').config();

module.exports = {
  development: {
    username: "lucas",
    password: process.env.USER_PASS,
    database: "associations",
    host: "127.0.0.1",
    dialect: 'mysql',
  },
};
