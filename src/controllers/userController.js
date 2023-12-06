// src/controllers/userController.js
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/User');//models/User

module.exports = {
    register: async (req, res) => {
        const { username, email, password, country } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            await User.create({
                username,
                email,
                password: hashedPassword,
                country_id: country
            });

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'An error occurred' });
        }
    },

    login: (req, res, next) => {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login'
        })(req, res, next);
    }
};
