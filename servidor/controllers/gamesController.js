const Games = require('../models/Games');

//Function to get games
exports.getGames = async (req, res) => {

    try {
        let games;
        
        // get the games filtered by level and type
        games = new Games(req.body);
        

        res.send(`${req.body}`);

    } catch (error) {
        console.log(error);
        res.status(400).send(`Hubo un error, ${error}`);
    }
}