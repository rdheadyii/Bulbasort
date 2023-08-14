const router = require('express').Router();
const { Game } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try{
        const games = await Game.findAll();
        res.status(200).json(games);
    }
    catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try{
        const games = await Game.findByPk(req.params.id);
        res.status(200).json(games);
    }
    catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});

module.exports = router;