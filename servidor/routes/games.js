const express = require('express'); 
const router = express.Router();
const gamesController = require('../controllers/gamesController');

// Crea un juego
// api/games
router.get('/', 
    gamesController.getGames
);

module.exports = router;