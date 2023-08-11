const router = require('express').Router();
const { Teams } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try{
        const team = await Teams.findAll();
        res.status(200).json(team);
    }
    catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try{
        const team = await Teams.findByPk(req.body.id);
        res.status(200).json(team);
    }
    catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});
router.post('/', async (req, res) => {
    try{
        const team = await Pokemon.findAll();
        res.status(200).json(pokemon);
    }
    catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});

module.exports = router;