const sequelize = require('../config/connection');
const { User, Game, Team, Generation, Pokemon, PokeTeam } = require('../models');

const userData = require('./userData.json');
const gameData = require('./gameData.json');
const teamData = require('./teamData.json');
const genData = require('./genData.json');
const svPokedex = require('./svpokedex.json');
const pokeTeamData = require('./pokeTeamData.json');

const seedDatabase = async () => {
    // sync sequelize
    await sequelize.sync({ force: true });

    // seed user data
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    // seed game data
    await Game.bulkCreate(gameData, {
        returning: true,
    });

    // seed team data
    for (const team of teamData) {
        await Team.create({
            ...team,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    // seed generation data
    await Generation.bulkCreate(genData, {
        returning: true,
    });

    // seed pokedex data
    await Pokemon.bulkCreate(svPokedex, {
        returning: true,
    });

    process.exit(0);
};

// call the function
seedDatabase();