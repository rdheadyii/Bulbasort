const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PokeTeam extends Model {}

PokeTeam.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        pokemon_name: {
            type: DataTypes.STRING,
            references: {
                model: 'pokemon',
                key: 'name'
            }
        },
        team_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'team',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'poketeam',
        indexes: [
            {
                fields: ['pokemon_name']
            }
        ]
    }
);

module.exports = PokeTeam;