const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Generation extends Model {}

Generation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'generation',
    }
);

module.exports = Generation;