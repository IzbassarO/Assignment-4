const express = require('express');
const router = express.Router();
const axios = require('axios');
const { ensureAuthenticated } = require('../middlewares/middlewares');

// Function to fetch artwork data
async function fetchArtworks(lang = 'en') {
    let apiUrl = `https://api.artic.edu/api/v1/artworks`;

    // Append language parameter to the API URL
    apiUrl += `?lang=${lang}`;

    try {
        const response = await axios.get(apiUrl);
        if (response.status === 200 && response.data && response.data.data) {
            return response.data.data;
        } else {
            throw new Error('Failed to fetch artwork data');
        }
    } catch (error) {
        console.error('Error fetching artwork data:', error);
        return null;
    }
}

router.get('/artwork', ensureAuthenticated, async (req, res) => {
    const lang = req.query.lang || 'en'; // Default to 'en' if no language parameter is provided
    const artworks = await fetchArtworks(lang);

    const loggedIn = req.session.user ? true : false;
    res.render('artwork', {
        translations: res.locals.translations,
        language: res.locals.language,
        artworks: artworks,
        isAdmin: req.session.user && req.session.user.isAdmin,
        loggedIn: loggedIn,
    });
});

module.exports = router;
