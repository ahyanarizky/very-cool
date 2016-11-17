'use strict'
const jwt = require('jsonwebtoken')
const passport = require('passport')
const ModelUser = require('../models/user.model')


module.exports = {
    processRegister: function(req, res) {
        ModelUser.register({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            avatar_url: req.body.avatar_url
        }, req.body.password, function(err, data) {
            if (err) {
                res.json({ message: `Error : ${err}` })
            } else {
                passport.authenticate('local')(req, res, function() {
                    req.session.save(function(err, next) {
                        if (err) {
                            res.json({ message: `Registration failed : ${err}` })
                        } else {
                            let token = jwt.sign({
                                    username: data.username,
                                    avatar_url: data.avatar_url,
                                    name: data.name
                                }, 'secret', { expiresIn: 1440 }) //1 day
                            res.json({
                                success: true,
                                message: `Registration Success`,
                                token: token
                            })
                        }
                    })
                })
            }
        })


    },
    processLogin: function(req, res, next) {
        passport.authenticate('local', {}, (err, user, info) => {
            let token = jwt.sign({
                    username: user.username,
                    avatar_url: user.avatar_url,
                    name: user.name
                }, 'secret', { expiresIn: 1440 }) //1 day
            res.json({
                success: true,
                message: `Login Success`,
                token: token
            })
        })(req, res, next)
    }
}
