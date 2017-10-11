const express = require('express');
const router = express.Router();
const $ = require('jquery');

// Render home page
router.route('/')
  .get((req, res) => {
    res.render('pages/home.ejs', { title: 'Home' });
  });

// Render about page
router.route('/about')
  .get((req, res) => {
    res.render('pages/about.ejs', { title: 'About' });
  });

// Render projects page
router.route('/projects')
  .get((req, res) => {
    res.render('pages/projects.ejs', { title: 'Project' });
  });

module.exports = router;