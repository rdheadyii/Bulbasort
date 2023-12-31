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
  version_game: {
    type: DataTypes.STRING,
    allowNull: false,
    reference: {
        model: 'game',
        key: 'name'
    },
  },
  
},
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pokemon',
    indexes: [
      {
        fields: ['name']
      }
    ]
    }
);
module.exports = Pokemon;
