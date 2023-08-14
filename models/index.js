const Generation = require('./Generation');
const Game = require('./Game');
const Pokemon = require('./Pokemon');
const PokeTeam = require('./PokeTeam');
const Team = require('./Team');
const User = require('./User');

Generation.hasMany(Game);

Game.belongsTo(Generation, {
    foreignKey: 'generation_name'
});

Game.hasMany(Pokemon);

Pokemon.belongsToMany(Game, {
    foreignKey: 'version_game',
    through: Game
});

User.hasMany(Team, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Team.belongsTo(User, {
    foreignKey: 'user_id'
});

Team.belongsTo(Game, {
    foreignKey: 'version'
});

Pokemon.belongsToMany(Team, {
    through: PokeTeam
});

Team.belongsToMany(Pokemon, {
    through: PokeTeam
});

module.exports = {
    Generation,
    Game,
    Pokemon,
    PokeTeam,
    Team,
    User,
};
