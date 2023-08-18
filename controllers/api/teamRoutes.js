const router = require("express").Router();
const { Team, PokeTeam, User } = require("../../models");
const withAuth = require("../../utils/auth");

// gets all teams by an inner join through the user id
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password']},
      include: [
        {
          model: Team
        }
      ]
    });
    //double check user_id index?

    const user = userData.get({ plain: true});

    res.render('team', { user, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  } 
});

// shows specific team
router.get("/:id", async (req, res) => {
  try {
    const teamData = await Team.findByPk(req.params.id);

    const team = teamData.get({plain: true});

    res.render('team', {
      ...team,
      logged_in: req.session.logged_in
    });

  } catch (err) {
    console.error("failed to retreive selected team", err);
    res.status(500).json(err);
  }
});

// creates new team
router.post("/", withAuth, async (req, res) => {
  try {
    const newTeam = await Team.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newTeam);
  } catch (err) {
    res.status(500).json(err);
  }
});

// updates the team
router.put("/:id", withAuth, async (req, res) => {
  try {
    const teamData = await Team.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!teamData) {
      res.status(404).json({ message: "No team found with this id!" });
      return;
    }
    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// deletes teams by id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const teamData = await Team.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!teamData) {
      res.status(404).json({ message: "No team found with this id!" });
      return;
    }
    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
