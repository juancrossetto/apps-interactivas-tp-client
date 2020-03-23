const User = require('../models/User');

//Function to login user
exports.loginUser = async (req, res) => {

    const { nick, email } = req.body;
    
    try {
        let user = await User.findOne({email});

        if(user){
            return res.status(400).json({msg: 'El usuario ya existe'});
        }
        // login the new user
        user = new User(req.body);

        // descomentar cuando este la base creada
        //await user.save();

        res.send(`${nick} Logeado Correctamente`);

    } catch (error) {
        console.log(error);
        res.status(400).send(`Hubo un error, ${error}`);
    }
}