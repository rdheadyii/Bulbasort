const Generation = require('./Generation');
const Game = require('./Game');
const Pokemon = require('./Pokemon');
const PokeTeam = require('./PokeTeam');
const Team = require('./Team');
const User = require('./User');

Game.belongsTo(Generation);

Generation.hasMany(Game);

Pokemon.belongsToMany(Game, {
    foreignKey: 'version_game'
});

Game.hasMany(Pokemon);

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

Team.hasMany(Pokemon, {
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
