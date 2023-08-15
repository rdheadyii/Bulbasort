const router = require('express').Router();
const { Game } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const gameData = await Game.findAll();

        const games = gameData.map((game) => game.get({ plain: true }));

        res.render('game', {
            games,
            logged_in: req.session.logged_in
        });

    }
    catch (err) {
        console.error('Failed to retreive games', err);
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const gameData = await Game.findByPk(req.params.id);

        const game = gameData.get({plain: true});

        res.render('game', {
            ...game,
            logged_in: req.session.logged_in
        });
    }
    catch (err) {
        console.error('Failed to retreive game', err);
        res.status(500).json(err)
    }
});

module.exports = router;