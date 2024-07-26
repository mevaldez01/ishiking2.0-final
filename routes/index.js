const express = require('express');
const router = express.Router();
const Hike = require('../models/hike');

// Home Route
router.get('/', (req, res) => {
    res.render('index');
});

// Hiking Route
router.get('/hiking', async (req, res) => {
    const hikes = await Hike.find();
    res.render('hiking', { hikes });
});

// Where to Next Route
router.get('/next', (req, res) => {
    res.render('next');
});

// About Us Route
router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
