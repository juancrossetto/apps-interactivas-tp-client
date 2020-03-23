const express = require('express'); 
const router = express.Router();
const gamesController = require('../controllers/gamesController');
const { check } = require('express-validator');

// Crea un juego
// api/games
router.get('/', 
    [
        check('type', 'La asignatura es obligatoria').not().isEmpty(),
        check('type', 'La asignatura ingresada no es válida').isIn(['math', 'language']),
        check('level', 'El nivel es obligatorio').not().isEmpty(),
        check('level', 'El nivel ingresado no es válido').isIn(['easy', 'medium', 'hard'])
    ],
    gamesController.getGames
);

module.exports = router;