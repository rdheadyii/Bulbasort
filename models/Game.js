const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Game extends Model {}

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        generation_name: {
            type: DataTypes.STRING,
            references: {
                model: 'generation',
                key: 'name',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
        indexes: [
            {
                fields: ['name']
            }
        ]
    }
);

module.exports = Game;