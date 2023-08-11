const router = require('express').Router();
const { Team } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try{
        const team = await Team.findAll();
        res.status(200).json(team);
    }
    catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try{
        const team = await Team.findByPk(req.body.id);
        res.status(200).json(team);
    }
    catch (err) {
        console.error('failed to retreive pokemon', err);
        res.status(500).json(err)
    }
});

router.post('/', withAuth, async (req, res) => {
    try{
        const newTeam = await Team.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newTeam);
    }
    catch (err) {
        res.status(500).json(err);
    }
    });

router.put('/:id', withAuth, async (req, res) => {
    try {
        const teamData = await Team.update({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
              },
        });
        if (!teamData) {
            res.status(404).json({ message: "No team found with this id!"});
            return;
            }
        res.status(200).json(teamData);
     } catch (err) {
        res.status(500).json(err);
     

    }
})

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const teamData = await Team.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
              },
        });
        if (!teamData) {
            res.status(404).json({ message: "No team found with this id!"});
            return;
            }
        res.status(200).json(teamData);
     } catch (err) {
        res.status(500).json(err);
     }
    });

module.exports = router;