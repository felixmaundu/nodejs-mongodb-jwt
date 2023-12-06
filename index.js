// index.js
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const sequelize = require('./src/config/database'); // Corrected path
const routes = require('./src/routes/routes');
const passportConfig = require('./src/config/passport');

const app = express();

// Express Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Express Session
const sessionStore = new MySQLStore({}, sequelize);
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', routes);

// Database Connection
sequelize
    .sync()
    .then(() => {
        console.log('Database connected');
        app.listen(3000, () => {
            console.log('Server started on port 3000');
        });
    })
    .catch(error => {
        console.error('Database connection error:', error);
    });
