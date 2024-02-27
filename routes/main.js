const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middlewares/middlewares');

router.get('/', ensureAuthenticated, async (req, res) => {
    try {
        const isAdmin = req.session.user ? req.session.user.isAdmin : false;
        const loggedIn = req.session.user ? true : false;


        const response = await fetch('https://api.unsplash.com/photos?page=1&per_page=10&order_by=latest', {
            headers: {
                'Authorization': 'Client-ID r3T40C3hsXdaLZo43Ac9WY30aB708FZSvHcfY5RdGhg'
            }
        });

        const data = await response.json();

        res.render('index', {
            loggedIn: loggedIn,
            isAdmin: isAdmin,
            images: data
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

module.exports = router;