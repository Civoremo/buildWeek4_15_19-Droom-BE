const Users = require('../models/Users');

module.exports = {
    authValidation
};

const authValidation = (req, res, next) => {
    const { email, password } = req.body;

    // body validation
    if (!email || !password) {
        return res.status(400).json({
            message:
                'Please make sure all fields are provided'
        });
    }

    // See if email already exists
    const findUser = await Users.findBy({ email });

    if (findUser.length)
        return res.status(409).json({
            message: 'Sorry, but that email already exists'
        });

    next();
}
