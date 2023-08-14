const router = require('express').Router();
const { Generation } = require('../../models');

router.get('/', async (req, res) => {
    try{
        const generation = await Generation.findAll();
        res.status(200).json(generation);
    }
    catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try{
        const generation = await Generation.findByPk(req.params.id);
        res.status(200).json(generation);
    }
    catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});

module.exports = router;