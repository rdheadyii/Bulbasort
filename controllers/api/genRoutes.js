const router = require('express').Router();
const { Generation } = require('../../models');

router.get('/', async (req, res) => {
    try{
        const genData = await Generation.findAll();

        const generations = genData.map((generation) => generation.get({plain: true}));

        res.render('generation', {
            generations,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try{
        const genData = await Generation.findByPk(req.params.id);

        const generation = genData.get({plain: true});

        res.render('generation', {
            ...generation,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});

module.exports = router;