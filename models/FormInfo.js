const {Model, DataTypes} = require("sequelize");
const sequelize = require("./database");

class FormInfo extends Model {}

FormInfo.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    authorization: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:false
    },
    matricula: {
        type: DataTypes.STRING,
        allowNull: false
    },
    metros: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'forminfo',
    timestamps: true,
    tableName: 'forminfo',
})

module.exports = FormInfo;