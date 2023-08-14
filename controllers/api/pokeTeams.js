const router = require("express").Router();
const { PokeTeam } = require("../../models");
const withAuth = require("../../utils/auth");

// shows all teams
router.get("/", async (req, res) => {
  try {
    const poketeam = await PokeTeam.findAll();
    res.status(200).json(poketeam);
  } catch (err) {
    console.error("failed to retreive pokemon", err);
    res.status(500).json(err);
  }
});

// shows specific team
router.get("/:id", async (req, res) => {
  try {
    const pokeTeam = await PokeTeam.findByPk(req.body.id);
    res.status(200).json(pokeTeam);
  } catch (err) {
    console.error("failed to retreive pokemon", err);
    res.status(500).json(err);
  }
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
    const pokeTeamData = await pokeTeam.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
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
        user_id: req.session.user_id,
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
