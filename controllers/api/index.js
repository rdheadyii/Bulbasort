const router = require('express').Router();
const PokeTeam = require('./pokeTeams.js');
const gameRoutes = require('./gameRoutes.js');
const pokemonRoutes = require('./pokemonRoutes.js');
const teamRoutes = require('./teamRoutes.js');
const userRoutes = require('./userRoutes.js');

router.use('/games', gameRoutes);
router.use('/pokemon', pokemonRoutes);
router.use('/teams', teamRoutes);
router.use('/users', userRoutes);
router.use('/poketeam', PokeTeam)

module.exports = router;
