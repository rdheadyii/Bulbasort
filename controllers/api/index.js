const router = require('express').Router();
const pokeTeam = require('./pokeTeams.js');
const gameRoutes = require('./gameRoutes.js');
const pokemonRoutes = require('./pokemonRoutes.js');
const teamRoutes = require('./teamRoutes.js');
const userRoutes = require('./userRoutes.js');
const genRoutes = require('./genRoutes.js')

router.use('/games', gameRoutes);
router.use('/pokemon', pokemonRoutes);
router.use('/teams', teamRoutes);
router.use('/users', userRoutes);
router.use('/poketeam', pokeTeam);
router.use('/generation', genRoutes);


module.exports = router;
