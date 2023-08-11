const router = require('express').Router();
const { Pokemon } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try{
        const pokemon = await Pokemon.findAll();
        res.status(200).json(pokemon);
    }
    catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try{
        const pokemon = await Pokemon.findByPk(req.body.id);
        res.status(200).json(pokemon);
    }
    catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});

// **************************DELETE***********************************************
router.post('/', async (req, res) => {
    try{
        const pokemon = await Pokemon.findAll();
        res.status(200).json(pokemon);
    }
    catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});
// *****************************DELETE********************************************
module.exports = router;