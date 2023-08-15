const router = require("express").Router();
const { PokeTeam } = require("../../models");
const withAuth = require("../../utils/auth");

// shows all teams
router.get("/", async (req, res) => {
  try {
    const poketeamData = await PokeTeam.findAll();

    const pokeTeams = poketeamData.map((pokeTeam) => pokeTeam.get({plain: true}));

    res.render('poketeam', {
      pokeTeams,
      logged_in: req.session.logged_in
    });

  } catch (err) {
    console.error("failed to retreive pokemon", err);
    res.status(500).json(err);
  }
});

// shows specific team
router.get("/:id", async (req, res) => {
  try {
    const poketeamData = await PokeTeam.findByPk(req.params.id);

    const pokeTeam = poketeamData.get({plain: true});

    res.render('poketeam', {
      ...pokeTeam,
      logged_in: req.session.logged_in
    });
    
  } catch (err) {
    console.error("failed to retreive pokemon", err);
    res.status(500).json(err);
  }4
});

// creates new team
router.post("/", withAuth, async (req, res) => {
  try {
    const newPoke = await PokeTeam.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPoke);
  } catch (err) {
    res.status(500).json(err);
  }
});

// updates the team
router.put("/:id", withAuth, async (req, res) => {
  try {
    const pokeTeamData = await PokeTeam.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!pokeTeamData) {
      res.status(404).json({ message: "No team found with this id!" });
      return;
    }
    res.status(200).json(pokeTeamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// deletes teams by id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const pokeTeamData = await PokeTeam.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!pokeTeamData) {
      res.status(404).json({ message: "No team found with this id!" });
      return;
    }
    res.status(200).json(pokeTeamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
