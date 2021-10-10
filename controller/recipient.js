const { recipient } = require('../models');

class recipientController{
    static allRecipient(req, res, next){
        recipient.findAll()
        .then((data) => {
            console.log(data);
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
    }

    static newRecipient(req, res, next){
        const { name_of_recipient, name_of_company, status, address} = req.body
        recipient.create({ name_of_recipient, name_of_company, status, address })
        .then((data) => {
            console.log(data);
            res.status(201).json(data)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
    }
};

module.exports = recipientController;