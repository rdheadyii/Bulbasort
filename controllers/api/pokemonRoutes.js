const router = require('express').Router();
const { Pokemon } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try{
        const pokemonData = await Pokemon.findAll();

        const pokemons = pokemonData.map((pokemon) => pokemon.get({plain: true}));

        res.render('create', {
            pokemons,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try{
        const pokemonData = await Pokemon.findByPk(req.params.id);

        const pokemon = pokemonData.get({plain: true});
    
        res.render('create', {
            ...pokemon,
            logged_in: req.session.logged_in
        });
    
    } catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});

// **************************DELETE***********************************************
router.post('/', async (req, res) => {
    try {
        const newPokemon = await Pokemon.create({
          ...req.body,
          user_id: req.session.user_id,
        });
    
        res.status(200).json(newPokemon);
      } catch (err) {
        res.status(400).json(err);
      }
});
// *****************************DELETE********************************************
module.exports = router;