require('dotenv').config()
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const cors = require('cors');
const session = require('express-session');


const api = require('./routes/api.route');
const ModelUser = require('./models/user.model')


const app = express();

mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE)

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(ModelUser.authenticate()))
app.use('/api', api);

passport.serializeUser(ModelUser.serializeUser())
passport.deserializeUser(ModelUser.deserializeUser())

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});


module.exports = app;
