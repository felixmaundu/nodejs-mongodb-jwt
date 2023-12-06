// config/passport.js
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('./../models/User');

// module.exports = function (passport) {
module.exports = function (passport) {
    passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        try {
            const user = await User.findOne({ where: { email } });

            if (!user) {
                return done(null, false, { message: 'Email is not registered' });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Incorrect password' });
            }
        } catch (error) {
            console.error(error);
            return done(error);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user.user_id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findByPk(id);
            done(null, user);
        } catch (error) {
            console.error(error);
            done(error, null);
        }
    });
};
