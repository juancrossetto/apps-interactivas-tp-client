// Rutas para crear usuario
const express = require('express'); //usamos express para el router
const router = express.Router();
const userController = require('../controllers/userController');

// Crea un usuario
// api/user
router.post('/',
    userController.loginUser
);

module.exports = router;