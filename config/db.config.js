require('dotenv').config({ path: '.env' });

module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    PORT: process.env.DB_PORT,
    DIALECT: process.env.DIALECT
};