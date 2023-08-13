const sequelize = require('../config/connection');
const { User, Game, Team, Generation, Pokemon, PokeTeam } = require('../models');

const userData = require('./userData.json');
const gameData = require('./gameData.json');
const teamData = require('./teamData.json');
const genData = require('./genData.json');
const svPokedex = require('./svpokedex.json');
const pokeTeamData = require('./pokeTeamData.json');
