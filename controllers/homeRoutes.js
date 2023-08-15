const router = require('express').Router();
const { Generation, User } = require('../models');
const withAuth = require('../utils/auth');

// Made a get for all generations
router.get('/', async (req, res) => {
  const generationData = await Generation.findAll().catch((err) => { 
      res.json(err);
    });
      const generations = generationData.map((generation) => generation.get({ plain: true }));
      res.render('homepage', { generations });
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