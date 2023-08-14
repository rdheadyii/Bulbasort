const router = require('express').Router();
const { Game, User } = require('../models');
const withAuth = require('../utils/auth');

// Made a get for all games
router.get('/', async (req, res) => {
    try {
      
      const gameData = await Game.findAll({
        include: [
          {
            model: Game,
            attributes: ['name, generation_name'],
          },
        ],
      });
  
      const Games = gameData.map((Game) => Game.get({ plain: true }));
      res.render('homepage', { 
        Games, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// This will render the login screen unless already logged in
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;