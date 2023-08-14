const router = require('express').Router();
const { Generation } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try{
        const Generation = await Generation.findAll();
        res.status(200).json(Generation);
    }
    catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try{
        const games = await Game.findByPk(req.body.id);
        res.status(200).json(games);
    }
    catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});

module.exports = router;