'use strict'

const Thread = require('../models/thread.model')

module.exports = {
    getAllThread: function(req, res) {
        Thread.find({}, function(err, data) {
            if (err) {
                res.json({ message: `Error : ${err}` })
            } else {
                res.json(data)
            }
        })
    },
    getOneThread: function(req, res) {
        Thread.findOne({
            threadId: req.params.id
        }, function(err, data) {
            if (err) {
                res.json({ message: `Error : ${err}` })
            } else {
                res.json(data)
            }
        })
    },
    createNewThread: function(req, res) {
        Thread.create({
            title: req.body.title,
            content: req.body.content,
            comment: req.body.comment
        }, function(err, data) {
            if (err) {
                res.json({ message: `Error : ${err}` })
            } else {
                res.json(data)
            }
        })
    },
    updateThread: function(req, res) {
        Thread.findOneAndUpdate({
            threadId: req.params.id
        }, {
            title: req.body.title,
            content: req.body.content,
        }, {
            new: true
        }, function(err, data) {
            if (err) {
                res.json({ message: `Error : ${err}` })
            } else {
                res.json(data)
            }
        })
    },
    deleteThread: function(req, res) {
        Thread.remove({
            threadId: req.params.id
        }, function(err, data) {
            if (err) {
                res.json({ message: `Error : ${err}` })
            } else {
                res.json(data)
            }
        })
    }
}
