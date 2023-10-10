const sequelize = require('./database')
const FormInfo = require('./FormInfo')

const connectToDatabase = async () => {
    // declareRelations();
    // await syncModels();
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const syncModels = async () => {
    await FormInfo.sync({alter: true})
}

module.exports = {connectToDatabase}