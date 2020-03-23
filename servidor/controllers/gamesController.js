const Games = require('../models/Games');
const { validationResult } = require('express-validator');

//Function to get games
exports.getGames = async (req, res) => {

    try {
        const errors = validationResult(req);

        if( !errors.isEmpty() )
            return res.status(400).json({errors: errors.array() })
        
        const { id, type, level } = req.body;

        let games;
        //#region Mock Response
        let gamesMocked;

        gamesMocked = [
            { id: '1', type: 'math', level: 'easy', layout: '8 + ${answer} = 10', answer: '2' },
            { id: '2', type: 'math', level: 'easy', layout: '5 + ${answer} = 15', answer: '10' },
            { id: '3', type: 'math', level: 'easy', layout: '3 + ${answer} = 6', answer: '6' },
            { id: '4', type: 'math', level: 'medium', layout: '2 * ${answer} = 4', answer: '2' },
            { id: '5', type: 'math', level: 'medium', layout: '3 * ${answer} = 18', answer: '6' },
            { id: '6', type: 'math', level: 'medium', layout: '5 * ${answer} = 35', answer: '7' },
            { id: '7', type: 'math', level: 'hard', layout: '(5 + ${answer}) / 8 = 5', answer: '40' },
            { id: '8', type: 'math', level: 'hard', layout: '5 + ${answer} / 8 = 15', answer: '80' },
            { id: '9', type: 'math', level: 'hard', layout: '(2 + ${answer}) * 3 + 3 = 24', answer: '5' },

            { id: '10', type: 'language', level: 'easy', layout: 'Escritorio tiene ${answer} sílabas', answer: '4' },
            { id: '11', type: 'language', level: 'easy', layout: 'París empieza con P y termina con…¿?', answer: 's' },
            { id: '12', type: 'language', level: 'easy', layout: 'Cinco tiene ${answer} sílabas', answer: '2' },

            { id: '13', type: 'language', level: 'medium', layout: '¡La palabra raiz lleva tilde?', answer: 'true' },
            { id: '14', type: 'language', level: 'medium', layout: '¡La palabra teclado lleva tilde?', answer: 'false' },
            { id: '15', type: 'language', level: 'medium', layout: '¡La palabra programacion lleva tilde?', answer: 'true' },

            { id: '16', type: 'language', level: 'hard', layout: '¿Cuántos meses tienen 28 días?', answer: 'todos' },
            { id: '17', type: 'language', level: 'hard', layout: 'Todos me quieren para descansar. Si ya te lo he dicho, no lo pienses más. ¿Qué soy?', answer: 'silla' },
            { id: '18', type: 'language', level: 'hard', layout: 'Escriba las primeras cuatro letras de abecedario', answer: 'abec' }
        ];

        games = gamesMocked.filter( g => g.type === type && g.level === level);

        ////#endregion

        // get the games filtered by level and type
        //games = await Games.find({type: type, level: level});
        res.json({games});
        
        res.send(`${req.body}`);

    } catch (error) {
        console.log(error);
        res.status(400).send(`Hubo un error, ${error}`);
    }
}