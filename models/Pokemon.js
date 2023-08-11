const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pokemon extends Model {}

Pokemon.init({
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
  gameExclusive: {
    type: DataTypes.STRING,
    allowNull: false,
    reference: {
        model: 'game',
        key: 'game'
    },
  },
  
},
    {
    sequelize,
    modelName: 'pokemon';
    }
);
module.exports = Pokemon;
